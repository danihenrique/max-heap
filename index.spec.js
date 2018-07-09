const { expect } = require('chai');
const maxHeapFn = require('./index');

describe('maxHeap tests', () => {
  const maxHeap = maxHeapFn();

  describe('.insert(value)', () =>
    it('should insert values into the max heap', () => {
      maxHeap.insert(50);
      maxHeap.insert(80);
      maxHeap.insert(30);
      maxHeap.insert(90);
      maxHeap.insert(60);
      maxHeap.insert(40);
      maxHeap.insert(20);
    }));

  describe('.max()', () =>
    it('should get the max value in the heap', () =>
      expect(maxHeap.max()).to.equal(90)));

  describe('.size()', () =>
    it('should get the size of the heap', () =>
      expect(maxHeap.size()).to.equal(7)));

  describe('.extractMax()', () =>
    it('should extract the max value in the heap', () => {
      expect(maxHeap.extractMax()).to.equal(90);
      expect(maxHeap.max()).to.equal(80);
      expect(maxHeap.size()).to.equal(6);

      expect(maxHeap.extractMax()).to.equal(80);
      expect(maxHeap.max()).to.equal(60);
      expect(maxHeap.size()).to.equal(5);

      expect(maxHeap.extractMax()).to.equal(60);
      expect(maxHeap.max()).to.equal(50);
      expect(maxHeap.size()).to.equal(4);

      expect(maxHeap.extractMax()).to.equal(50);
      expect(maxHeap.max()).to.equal(40);
      expect(maxHeap.size()).to.equal(3);

      expect(maxHeap.extractMax()).to.equal(40);
      expect(maxHeap.max()).to.equal(30);
      expect(maxHeap.size()).to.equal(2);

      expect(maxHeap.extractMax()).to.equal(30);
      expect(maxHeap.max()).to.equal(20);
      expect(maxHeap.size()).to.equal(1);

      expect(maxHeap.extractMax()).to.equal(20);
      expect(maxHeap.max()).to.equal(null);
      expect(maxHeap.size()).to.equal(0);
    }));

  describe('.clear()', () =>
    it('should clear the heap', () => {
      maxHeap.clear();
      expect(maxHeap.max()).to.equal(null);
      expect(maxHeap.extractMax()).to.equal(null);
      expect(maxHeap.size()).to.equal(0);
    }));
});
