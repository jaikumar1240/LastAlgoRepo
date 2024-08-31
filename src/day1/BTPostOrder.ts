const walk = (node: BinaryNode<number> | null, result: number[]) => {
    if (node === null) {
        return;
    }
    walk(node.left, result);
    walk(node.right, result);
    result.push(node.value);
    return result;
}
export default function post_order_search(head: BinaryNode<number>): number[]| undefined {
    const result: number[] = [];
    return walk(head, result);
}