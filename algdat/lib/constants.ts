export const AlgDat = [
    {
        dataStruct: "Array",
        id: "array",
        algorithms: [
            {
                function: "Insertion-Sort(A)",
                returns: "Sorted array A",
                description: "Insertion-Sort is a simple algorithm that sorts an array by iterating through the array and inserting each element into its correct position.",
            },
            {
                function: "BISECT(A, p, r, v)",
                returns: "The index of v in array A, if it exists",
                description: "BISECT is a simple algorithm that searches for an element in the array using binary search.",
            },
            {
                function: "MERGE(A, p, q, r)",
                returns: "Nothing, but merges two subarrays of A",
                description: "MERGE is a simple algorithm that merges two subarrays of the array.",
            },
            {
                function: "MERGE-SORT(A, p, r)",
                returns: "Sorted array A",
                description: "MERGE-SORT is a simple algorithm that sorts an array by recursively dividing it into two halves, sorting them, and merging them.",
            },
            {
                function: "PARTITION(A, p, r)",
                returns: "The index of the pivot element",
                description: "PARTITION is a simple algorithm that partitions the array into two subarrays around a pivot element.",
            },
            {
                function: "QUICKSORT(A, p, r)",
                returns: "Sorted array A",
                description: "QUICKSORT is a simple algorithm that sorts an array by recursively partitioning it around a pivot element.",
            },
            {
                function: "RANDOMIZED-PARTITION(A, p, r)",
                returns: "The index of the pivot element",
                description: "RANDOMIZED-PARTITION is a simple algorithm that partitions the array into two subarrays around a randomly chosen pivot element.",
            },
            {
                function: "RANDOMIZED-QUICKSORT(A, p, r)",
                returns: "Sorted array A",
                description: "RANDOMIZED-QUICKSORT is a simple algorithm that sorts an array by recursively partitioning it around a randomly chosen pivot element.",
            },
            {
                function: "RANDOMIZED-SELECT(A, p, r, i)",
                returns: "The ith smallest element in array A",
                description: "RANDOMIZED-SELECT is a simple algorithm that finds the ith smallest element in the array.",
            },
            {
                function: "SELECT(A, p, r, i)",
                returns: "The ith smallest element in array A",
                description: "SELECT is a simple algorithm that finds the ith smallest element in the array.",
            },
            {
                function: "COUNTING-SORT(A, n, k)",
                returns: "Sorted array A",
                description: "COUNTING-SORT is a simple algorithm that sorts an array by counting the number of elements that have each distinct key value.",
            },
            {
                function: "RADIX-SORT(A, d)",
                returns: "Sorted array A",
                description: "RADIX-SORT is a simple algorithm that sorts an array by sorting the elements by their digits.",
            },
            {
                function: "BUCKET-SORT(A, n)",
                returns: "Sorted array A",
                description: "BUCKET-SORT is a simple algorithm that sorts an array by distributing the elements into a number of buckets.",
            },
            {
                function: "GALE-SHAPLEY(M, W)",
                returns: "A stable matching between M and W",
                description: "GALE-SHAPLEY is a simple algorithm that generates a stable matching between two sets.",
            },
        ]
    },
    {
        dataStruct: "Stack",
        id: "stack",
        algorithms: [
            {
                function: "Stack-Empty(S)",
                returns: "True if stack S is empty, false otherwise",
                description: "Stack-Empty is a simple algorithm that checks if the stack is empty or not.",
            },
            {
                function: "Push(S, x)",
                returns: "Nothing, but adds x at the top of stack S if it is not full",
                description: "Push is a simple algorithm that adds a new element to the stack.",
            },
            {
                function: "Pop(S)",
                returns: "The top element of stack S, if S is not empty",
                description: "Pop is a simple algorithm that removes the top element from the stack.",
            },
            {
                function: "MULTIPOPS(S, k)",
                returns: "The top k elements of stack S, if S contains at least k elements",
                description: "MULTIPOPS is a simple algorithm that removes the top k elements from the stack.",
            },
        ]
    },
    {
        dataStruct: "Queue",
        id: "queue",
        algorithms: [
            {
                function: "Enqueue(Q, x)",
                returns: "Nothing, but adds x at the rear of queue Q",
                description: "Enqueue is a simple algorithm that adds a new element to the queue.",
            },
            {
                function: "Dequeue(Q)",
                returns: "The front element of queue Q, if Q is not empty",
                description: "Dequeue is a simple algorithm that removes the front element from the queue.",
            },
        ]
    },
    {
        dataStruct: "Linked List",
        id: "linked-list",
        algorithms: [
            {
                function: "List-Search(L, k)",
                returns: "A pointer to the first element in L whose key is equal to k",
                description: "List-Search is a simple algorithm that searches for an element in the linked list.",
            },
            {
                function: "List-Prepend(L, x)",
                returns: "Nothing, but adds x at the front of list L",
                description: "List-Prepend is a simple algorithm that adds a new element to the front of the linked list.",
            },
            {
                function: "List-Insert(L, x, y)",
                returns: "Nothing, but inserts y after x in list L",
                description: "List-Insert is a simple algorithm that inserts an element after another element in the linked list.",
            },
            {
                function: "List-Delete(L, x)",
                returns: "Nothing, but removes x from list L",
                description: "List-Delete is a simple algorithm that removes an element from the linked list.",
            },
        ]
    },
    {
        dataStruct: "Hash Table",
        id: "hash-table",
        algorithms: [
            {
                function: "Direct-Address-Search(T, k)",
                returns: "The element stored at key k in table T",
                description: "Direct-Address-Search is a simple algorithm that searches for an element in the hash table.",
            },
            {
                function: "Direct-Address-Insert(T, x)",
                returns: "Nothing, but inserts element x into table T",
                description: "Direct-Address-Insert is a simple algorithm that inserts an element into the hash table.",
            },
            {
                function: "Direct-Address-Delete(T, x)",
                returns: "Nothing, but deletes element at key x at table T and sets it to NIL",
                description: "Direct-Address-Delete is a simple algorithm that deletes an element from the hash table.",
            },
            {
                function: "Multiply-And-Shift(k, m)",
                returns: "A hash value for key k",
                description: "MultiplyAndShift is a simple algorithm that generates a hash value for a key.",
            },
            {
                function: "Chained-Hash-Search(T, k)",
                returns: "The element stored at key k in table T",
                description: "Chained-Hash-Search is a simple algorithm that searches for an element in the hash table using chaining.",
            },
            {
                function: "Chained-Hash-Insert(T, x)",
                returns: "Nothing, but inserts element x into table T",
                description: "Chained-Hash-Insert is a simple algorithm that inserts an element into the hash table using chaining.",
            },
            {
                function: "Chained-Hash-Delete(T, x)",
                returns: "Nothing, but deletes element at key x at table T and sets it to NIL",
                description: "Chained-Hash-Delete is a simple algorithm that deletes an element from the hash table using chaining.",
            },
        ]
    },
    {
        dataStruct: "Dynamic Tables",
        id: "dynamic-table",
        algorithms: [
            {
                function: "TABLE-INSERT(T, x)",
                returns: "Nothing, but inserts element x into table T",
                description: "TABLE-INSERT is a simple algorithm that inserts an element into the dynamic table. If the table is full, it will be resized.",
            },
        ]
    },
    {
        dataStruct: "Tree",
        id: "tree",
        algorithms: [
            {
                function: "INORDER-WALK(x)",
                returns: "The elements of the tree in sorted order",
                description: "INORDER-WALK is a simple algorithm that prints the elements of the tree in sorted order.",
            },
            {
                function: "SEARCH(x, k)",
                returns: "A pointer to the element with key k, if it exists",
                description: "SEARCH is a simple algorithm that searches for an element in the tree.",
            },
            {
                function: "INSERT(T, x)",
                returns: "Nothing, but inserts element x into tree T",
                description: "INSERT is a simple algorithm that inserts an element into the tree.",
            },
            {
                function: "MINIIMUM(T)",
                returns: "The element with the smallest key in tree T",
                description: "MINIMUM is a simple algorithm that finds the element with the smallest key in the tree.",
            },
            {
                function: "SUCCESSOR(x)",
                returns: "The element with the smallest key larger than x",
                description: "SUCCESSOR is a simple algorithm that finds the element with the smallest key larger than x.",
            },
            {
                function: "DELETE(T, z)",
                returns: "Nothing, but deletes element z from tree T",
                description: "DELETE is a simple algorithm that deletes an element from the tree.",
            },
            {
                function: "HUFFMAN(C)",
                returns: "A Huffman code for set C",
                description: "HUFFMAN is a simple algorithm that generates a Huffman code for a set.",
            },
        ]
    },
    {
        dataStruct: "Heap",
        id: "heap",
        algorithms: [
            {
                function: "MAX-HEAPIFY(A, i)",
                returns: "Nothing, but maintains the max-heap property",
                description: "MAX-HEAPIFY is a simple algorithm that maintains the max-heap property.",
            },
            {
                function: "BUILD-MAX-HEAP(A, n)",
                returns: "Nothing, but builds a max-heap from an unordered array",
                description: "BUILD-MAX-HEAP is a simple algorithm that builds a max-heap from an unordered array.",
            },
            {
                function: "HEAP-MAX(A)",
                returns: "The element with the largest key in the heap",
                description: "HEAP-MAX is a simple algorithm that finds the element with the largest key in the heap.",
            },
            {
                function: "HEAP-EXTRACT-MAX(A)",
                returns: "The element with the largest key in the heap",
                description: "HEAP-EXTRACT-MAX is a simple algorithm that finds the element with the largest key in the heap and removes it.",
            },
            {
                function: "HEAP-INCREASE-KEY(A, x, k)",
                returns: "Nothing, but increases the key of element x to k",
                description: "HEAP-INCREASE-KEY is a simple algorithm that increases the key of an element in the heap.",
            },
            {
                function: "MAX-HEAP-INSERT(A, x, n)",
                returns: "Nothing, but inserts element x into heap A",
                description: "MAX-HEAP-INSERT is a simple algorithm that inserts an element into the heap.",
            },
            {
                function: "HEAP-SORT(A, n)",
                returns: "Sorted array A",
                description: "HEAP-SORT is a simple algorithm that sorts an array by building a max-heap and repeatedly extracting the largest element.",
            },
        ]
    },
    {
        dataStruct: "Graph",
        id: "graph",
        algorithms: [
            {
                function: "DFS(G)",
                returns: "A depth-first search tree for graph G",
                description: "DFS is a simple algorithm that generates a depth-first search tree for a graph.",
            },
            {
                function: "DFS-VISIT(G, u)",
                returns: "Nothing, but visits all vertices reachable from u",
                description: "DFS-VISIT is a simple algorithm that visits all vertices reachable from a vertex.",
            },
            {
                function: "BFS(G, s)",
                returns: "A breadth-first search tree for graph G",
                description: "BFS is a simple algorithm that generates a breadth-first search tree for a graph.",
            },
            {
                function: "GENERIC-MST(G, w)",
                returns: "A minimum spanning tree for graph G",
                description: "GENERIC-MST is a simple algorithm that generates a minimum spanning tree for a graph.",
            },
            {
                function: "MST-KRUSKAL(G, w)",
                returns: "A minimum spanning tree for graph G",
                description: "MST-KRUSKAL is a simple algorithm that generates a minimum spanning tree for a graph using Kruskal's algorithm.",
            },
        ]
    },
    {
        dataStruct: "Disjoint Set",
        id: "disjoint-set",
        algorithms: [
            {
                function: "MAKE-SET(x)",
                returns: "Nothing, but creates a new set whose only member is x",
                description: "MAKE-SET is a simple algorithm that creates a new set.",
            },
            {
                function: "UNION(x, y)",
                returns: "Nothing, but merges the sets containing x and y",
                description: "UNION is a simple algorithm that merges two sets.",
            },
            {
                function: "LINK(x, y)",
                returns: "Nothing, but merges the sets containing x and y",
                description: "LINK is a simple algorithm that merges two sets.",
            },
            {
                function: "FIND-SET(x)",
                returns: "The representative of the set containing x",
                description: "FIND-SET is a simple algorithm that finds the representative of a set.",
            },
            {
                function: "SAME-COMPONENT(x, y)",
                returns: "True if x and y are in the same set, false otherwise",
                description: "SAME-COMPONENT is a simple algorithm that checks if two elements are in the same set.",
            },
        ]
    },
];