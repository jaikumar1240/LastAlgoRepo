const walk = (node: BinaryNode<number> | null, result: number[]) => {
    if (node === null) {
        return;
    }
    walk(node.left, result);
    result.push(node.value);
    walk(node.right, result);
    return result;
}
export default function in_order_search(head: BinaryNode<number>): number[]| undefined {
    const result: number[] = [];
    return walk(head, result);
}