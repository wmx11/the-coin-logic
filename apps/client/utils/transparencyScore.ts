import { VoteReturnType } from 'hooks/useVotes';

type TransparencyScoreCalculator = {
  totalScore?: number;
  hasAudit: boolean;
  hasKyc: boolean;
  hasVetting: boolean;
  tclRating: number;
  votes?: VoteReturnType;
};

export const calculateTransparencyScore = ({
  totalScore,
  hasAudit,
  hasKyc,
  hasVetting,
  tclRating,
  votes,
}: TransparencyScoreCalculator) => {
  const KYC_WEIGHT = 35;
  const AUDIT_WEIGHT = 25;
  const TCL_WEIGHT = 20;
  const COMMUNITY_WEIGHT = 15;
  const VETTING_WEIGHT = 5;

  const auditScore = hasAudit ? AUDIT_WEIGHT : 0;
  const kycScore = hasKyc ? KYC_WEIGHT : 0;
  const vettingScore = hasVetting ? VETTING_WEIGHT : 0;
  const tclScore = tclRating ? (tclRating * TCL_WEIGHT) / 100 : 0;
  const communityScore = ((votes?.positivePercentage || 0) * COMMUNITY_WEIGHT) / 100 || 0;
  const result = totalScore
    ? Math.round(totalScore + communityScore)
    : Math.round(auditScore + kycScore + vettingScore + tclScore + communityScore);

  const textScore = (() => {
    if (result >= 90) {
      return 'Excellent';
    }

    if (result >= 80) {
      return 'Good';
    }

    if (result >= 60) {
      return 'Fair';
    }

    if (result >= 50) {
      return 'Average';
    }

    if (result >= 30) {
      return 'Below Average';
    }

    if (result >= 20) {
      return 'Concerning';
    }

    return 'Poor';
  })();

  return { score: Math.min(Math.max(result, 0), 100), textScore };
};
