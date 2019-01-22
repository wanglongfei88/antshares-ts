namespace Neo.Core
{
    export class ContractTransaction extends Transaction
    {
        constructor()
        {
            super(TransactionType.ContractTransaction);
        }
    }
}
