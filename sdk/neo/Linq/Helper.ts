type Func2<T1, T2, TResult> = (arg1: T1, arg2: T2) => TResult;

function linq<T>(array: ArrayLike<T>): Neo.Linq.Enumerator<T>
{
    return new Neo.Linq.ArrayEnumerator(array);
}
