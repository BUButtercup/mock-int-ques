const bubbleSort = require('../bubble');

describe('bubbleSort', () => {
    it('should sort a simple integer list', () => {
        const unsortedArr = [17, 63, 34, 100, 2, 8, 23],
                sorted = bubbleSort(unsortedArr)
        expect(sorted[0]).toEqual(2);
        expect(sorted[1]).toEqual(8);
        expect(sorted[2]).toEqual(17);
        expect(sorted[3]).toEqual(23);
        expect(sorted[4]).toEqual(34);
        expect(sorted[5]).toEqual(63);
        expect(sorted[6]).toEqual(100);
        expect(sorted.length).toEqual(7);
    });
    it('should sort positive and negative integers', () => {
        const unsortedArr = [-100, 34, 56, -1, 3, 14, -42],
                sorted = bubbleSort(unsortedArr);
        expect(sorted[0]).toEqual(-100);
        expect(sorted[1]).toEqual(-42);
        expect(sorted[2]).toEqual(-1);
        expect(sorted[3]).toEqual(3);
        expect(sorted[4]).toEqual(14);
        expect(sorted[5]).toEqual(34);
        expect(sorted[6]).toEqual(56);
        expect(sorted.length).toEqual(7);
    })
    it('should sort strings by first letter', () => {
        const unsortedArr = ['beet', 'tomato', 'kale', 'onion', 'carrot', 'rutabaga', 'eggplant'],
                sorted = bubbleSort(unsortedArr);
        expect(sorted[0]).toEqual('beet');
        expect(sorted[1]).toEqual('carrot');
        expect(sorted[2]).toEqual('eggplant');
        expect(sorted[3]).toEqual('kale');
        expect(sorted[4]).toEqual('onion');
        expect(sorted[5]).toEqual('rutabaga');
        expect(sorted[6]).toEqual('tomato');
        expect(sorted.length).toEqual(7);
    })
})