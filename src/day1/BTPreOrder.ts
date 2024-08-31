const walk = (node: BinaryNode<number> | null, result: number[]) => {
    if (node === null) {
        return;
    }
    result.push(node.value);
    walk(node.left, result);
    walk(node.right, result);
    return result;
}
export default function pre_order_search(head: BinaryNode<number>): number[]|undefined {
    const result: number[] = [];
    return walk(head, result);
}