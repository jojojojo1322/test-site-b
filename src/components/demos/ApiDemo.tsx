import { useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { PrimaryButton } from "@company/commons/ui";
import { DemoCard } from "@/components/DemoCard";
import { userService, type UserSummary } from "@/services/userService";
import { useDemoToast } from "@/hooks/useDemoToast";

export const ApiDemo = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<UserSummary | null>(null);
  const { success, error, showDemoToast } = useDemoToast();

  const handleLoadUser = async () => {
    setLoading(true);
    try {
      const data = await userService.getCurrentUser();
      setUser(data);
      success(`${data.name} 님 정보를 성공적으로 불러왔어요!`);
    } catch (err) {
      console.error(err);
      error("사용자 정보를 가져오지 못했어요.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Stack spacing={3}>
      <DemoCard
        title="공통 API 클라이언트"
        description="Axios + refresh interceptor"
        footer="401 응답이 내려오면 refresh 토큰 플로우가 큐 기반으로 재시도돼요."
      >
        <Stack spacing={2}>
          <PrimaryButton loading={loading} onClick={handleLoadUser}>
            사용자 정보 불러오기
          </PrimaryButton>
          {user && (
            <Stack spacing={0.5} divider={<Divider flexItem />}>
              <Typography variant="subtitle2" color="text.secondary">
                최근 응답
              </Typography>
              <Typography variant="body2">
                {user.name} ({user.email}) @ {user.company?.name}
              </Typography>
            </Stack>
          )}
        </Stack>
      </DemoCard>

      <DemoCard
        title="Zustand 이벤트 버스"
        description="ToastProvider + useToast 훅"
        footer="React-Toastify 컨테이너가 commons 패키지 안에서 초기화돼요."
      >
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <PrimaryButton color="secondary" onClick={showDemoToast}>
            토스트 발행하기
          </PrimaryButton>
          <PrimaryButton onClick={() => success("성공 토스트입니다!")}>
            Success
          </PrimaryButton>
          <PrimaryButton color="error" onClick={() => error("에러 토스트입니다.")}>
            Error
          </PrimaryButton>
        </Stack>
      </DemoCard>
    </Stack>
  );
};
