import Btc from "./icons/Btc.svg";
import { CurrencyCode } from "./types";

const getIconByCurrencyCode = (code: CurrencyCode) => {
  switch (code) {
    case CurrencyCode.BTC:
      return <Btc />;
    default:
      throw new Error("Invalid currency code");
  }
};

type CryptIconProps = {
  currencyCode: CurrencyCode;
};

export const CryptIcon: React.FC<CryptIconProps> = ({
  currencyCode,
}: CryptIconProps) => {
  return getIconByCurrencyCode(currencyCode);
};
