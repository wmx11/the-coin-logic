import { Text } from '@mantine/core';
import { ProjectTitle } from 'components/ProjectTitle';
import GradientText from 'components/Text/GradientText';
import GradientTitle from 'components/Text/GradientTitle';
import React, { FC } from 'react';
import { IoWarning } from 'react-icons/io5';
import { MdVerified } from 'react-icons/md';
import { Project } from 'types';

type AuditsAndKycProps = {
  project: Project;
};

const AuditsAndKyc: FC<AuditsAndKycProps> = ({ project }) => {
  const { auditBy, kycBy } = project;

  return (
    <div className="">
      <GradientTitle order={2} className="flex items-center gap-2 mb-4">
        {auditBy?.length && kycBy?.length ? (
          <>
            Project is Vetted <MdVerified className="text-violet" />
          </>
        ) : (
          <>
            Project is not Vetted <IoWarning className="text-red-500" />
          </>
        )}
      </GradientTitle>

      <div className="mb-4">
        <GradientText weight={600} className="mb-2">
          Audited By
        </GradientText>
        <div className="flex flex-col gap-2">
          {auditBy?.length ? (
            auditBy.map((audit, index) => {
              return (
                <div key={`auditor_${index}`}>
                  <ProjectTitle
                    title={audit.auditor?.name as string}
                    href={audit.url as string}
                    component="a"
                    size="sm"
                    target="_blank"
                    avatar={audit.auditor?.image ? audit.auditor?.image.url : ''}
                  />
                </div>
              );
            })
          ) : (
            <Text size="xs" color="dimmed">
              The project has not provided auditing information
            </Text>
          )}
        </div>
      </div>

      <div>
        <GradientText weight={600} className="mb-2">
          KYC By
        </GradientText>
        <div className="flex flex-col gap-2">
          {kycBy?.length ? (
            kycBy.map((kyc, index) => {
              return (
                <div key={`kycGroup${index}`}>
                  <ProjectTitle
                    title={kyc.kycGroup?.name as string}
                    href={kyc.url as string}
                    component="a"
                    size="sm"
                    target="_blank"
                    avatar={kyc.kycGroup?.image ? kyc.kycGroup?.image.url : ''}
                  />
                </div>
              );
            })
          ) : (
            <Text size="xs" color="dimmed">
              The project has not provided KYC information
            </Text>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuditsAndKyc;
