export interface IAuth {
  isLoggedIn: boolean;
}

export interface IExemptQuotaProps {
  max: number;
  current: number;
  unit: string;
}

export interface IExemptQuotas {
  cigarettes: IExemptQuotaProps;
  wine: IExemptQuotaProps;
  beer: IExemptQuotaProps;
  spirits: IExemptQuotaProps;
}

export interface IMonthlyQuota {
  monthAndYear: string;
  quotas: IExemptQuotas;
}

export interface IRefundMonthlyAmounts {
  monthAndYear: string;
  amount: string;
}

export interface IDBSchema {
  auth: IAuth;
  quotas: IMonthlyQuota[];
  refundAmounts: IRefundMonthlyAmounts[];
}
