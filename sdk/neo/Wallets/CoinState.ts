namespace Neo.Wallets
{
    export enum CoinState
    {
        Unconfirmed,
        Unspent,
        Spending,
        Spent,
        SpentAndClaimed
    }
}
