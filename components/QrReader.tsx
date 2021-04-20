import jsQR from 'jsqr';
import React from 'react';
import {
  qrHighlight,
  readDelay,
  canvasHeight,
  canvasWidth,
  webRTCConfig,
} from '../utils/qrUtil';
import {useRecoilState} from 'recoil';
import {
  qrReadState,
  qrLoadState,
  useCameraState,
  qrDataState,
} from '../utils/recoilAtoms';

const QrReader = () => {
  const [isQrRead, setIsQrRead] = useRecoilState(qrReadState);
  const [isQrLoad, setIsQrLoad] = useRecoilState(qrLoadState);
  const [, setUseCamera] = useRecoilState(useCameraState);
  const [, setQrData] = useRecoilState(qrDataState);

  const videoElement = document.createElement('video');
  const canvasElement = React.useRef<HTMLCanvasElement>(null);

  let canvasContext: CanvasRenderingContext2D | null = null;
  let animationFrame = 0;
  let videoStream: MediaStream = null;

  React.useEffect(() => {
    canvasContext = canvasElement.current.getContext('2d');

    setQrData(null);
    // カメラ接続
    navigator.mediaDevices
      .getUserMedia(webRTCConfig)
      .then(stream => {
        videoElement.srcObject = stream;
        videoStream = stream;
        videoElement.setAttribute('playsinline', 'true');
        videoElement.play();
        setIsQrLoad(false);
        animationFrame = requestAnimationFrame(tick);
      })
      .catch(() => {
        setUseCamera(false);
      });
  }, []);

  const tick = () => {
    const canvas = canvasElement.current;

    if (
      videoElement.readyState === videoElement.HAVE_ENOUGH_DATA &&
      canvasContext
    ) {
      canvas.height = canvasHeight;
      canvas.width = canvasWidth;
      canvasContext.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

      const imageData = canvasContext.getImageData(
        0,
        0,
        canvas.width,
        canvas.height
      );
      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert',
      });

      if (code) {
        setQrData(code.data);

        qrHighlight(
          code.location.topLeftCorner,
          code.location.topRightCorner,
          code.location.bottomLeftCorner,
          code.location.bottomRightCorner,
          canvasContext
        );

        setTimeout(() => {
          if (code.data && code.data !== '') {
            setIsQrRead(true);
            cancelAnimationFrame(animationFrame);
            const tracks = videoStream.getTracks();
            tracks.forEach(track => track.stop());
            return;
          }
        }, readDelay);
      }
    }
    animationFrame = requestAnimationFrame(tick);
  };

  return <canvas ref={canvasElement} hidden={isQrRead || isQrLoad}></canvas>;
};

export default QrReader;
