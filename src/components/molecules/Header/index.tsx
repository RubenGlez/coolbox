import Typography from "../../atoms/Typography";
import { HeaderWrapper } from "./styles";

export default function Header() {
  return (
    <HeaderWrapper>
      <Typography size="l">coolbox</Typography>
      <Typography size="s" color="secondary">
        working on it 😎
      </Typography>
    </HeaderWrapper>
  );
}
