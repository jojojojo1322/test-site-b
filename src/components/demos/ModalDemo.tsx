import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { PrimaryButton } from "@company/commons/ui";
import { useModal } from "@company/commons/modal";
import { DemoCard } from "@/components/DemoCard";

export const ModalDemo = () => {
  const { open: openModal, close: closeModal } = useModal();

  const handleBasicModal = () => {
    openModal("default", {
      title: "기본 모달",
      content: (
        <Typography>
          MUI Dialog 기반 커스텀 모달입니다. 모달 내용을 자유롭게 구성할 수 있어요.
        </Typography>
      ),
      actions: (
        <Button variant="contained" onClick={closeModal}>
          확인
        </Button>
      ),
    });
  };

  const handleFormModal = () => {
    openModal("default", {
      title: "폼 모달",
      content: (
        <Stack spacing={2} sx={{ pt: 1 }}>
          <TextField label="이름" fullWidth size="small" />
          <TextField label="이메일" type="email" fullWidth size="small" />
          <TextField label="메시지" multiline rows={3} fullWidth size="small" />
        </Stack>
      ),
      actions: (
        <Stack direction="row" spacing={1}>
          <Button variant="outlined" onClick={closeModal}>
            취소
          </Button>
          <Button variant="contained" onClick={closeModal}>
            저장
          </Button>
        </Stack>
      ),
    });
  };

  const handleConfirmModal = () => {
    openModal("default", {
      title: "삭제 확인",
      content: (
        <Typography color="text.secondary">
          이 항목을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.
        </Typography>
      ),
      actions: (
        <Stack direction="row" spacing={1}>
          <Button variant="outlined" onClick={closeModal}>
            취소
          </Button>
          <Button variant="contained" color="error" onClick={closeModal}>
            삭제
          </Button>
        </Stack>
      ),
      config: { maxWidth: "xs" },
    });
  };

  const handleFullWidthModal = () => {
    openModal("default", {
      title: "전체 너비 모달",
      content: (
        <Typography>
          maxWidth를 md 또는 lg로 설정하여 더 넓은 모달을 표시할 수 있습니다.
        </Typography>
      ),
      actions: (
        <Button variant="contained" onClick={closeModal}>
          닫기
        </Button>
      ),
      config: { maxWidth: "md" },
    });
  };

  return (
    <Stack spacing={3}>
      <DemoCard
        title="MUI 커스텀 모달"
        description="@company/commons/modal"
        footer="zustand 기반 전역 모달 상태 관리"
      >
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} flexWrap="wrap">
          <PrimaryButton onClick={handleBasicModal}>기본 모달</PrimaryButton>
          <PrimaryButton onClick={handleFormModal}>폼 모달</PrimaryButton>
          <PrimaryButton color="error" onClick={handleConfirmModal}>
            확인 모달
          </PrimaryButton>
          <PrimaryButton color="secondary" onClick={handleFullWidthModal}>
            넓은 모달
          </PrimaryButton>
        </Stack>
      </DemoCard>
    </Stack>
  );
};
