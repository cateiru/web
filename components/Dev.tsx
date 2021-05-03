import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
  Link,
} from '@chakra-ui/react';
import * as colors from '../utils/colors';

export const Dev = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  React.useEffect(() => {
    onOpen();
  }, []);

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>これは開発用です</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>このLogcationは開発用のテスト版です。</Text>
          <Text>
            開発者以外は<Link href="https://log.tdu.app">log.tdu.app</Link>
            をご利用ください。
          </Text>
          <Text>
            バグがある場合は
            <Link href="https://github.com/tdu-logcation/web/issues/new">
              GitHubのissue
            </Link>
            に報告していただければ幸いです。
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button
            backgroundColor={colors.mainPrimary}
            color={colors.textPrimary}
            mr={3}
            onClick={onClose}
          >
            閉じる
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
