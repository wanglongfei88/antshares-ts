﻿namespace AntShares.Core
{
    export enum TransactionType
    {
        MinerTransaction = 0x00,
        IssueTransaction = 0x01,
        ClaimTransaction = 0x02,
        EnrollmentTransaction = 0x20,
        VotingTransaction = 0x24,
        RegisterTransaction = 0x40,
        ContractTransaction = 0x80,
        AgencyTransaction = 0xb0,
        PublishTransaction = 0xd0
    }
}
