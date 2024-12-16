/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @template T
 */
export class LinkedList {
    constructor() {
        this.length = 0;
        this.asArray = [];
    }
    /**
     * @param {?} position
     * @return {?}
     */
    get(position) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            return void 0;
        }
        let /** @type {?} */ current = this.head;
        for (let /** @type {?} */ index = 0; index < position; index++) {
            current = current.next;
        }
        return current.value;
    }
    /**
     * @param {?} value
     * @param {?=} position
     * @return {?}
     */
    add(value, position = this.length) {
        if (position < 0 || position > this.length) {
            throw new Error('Position is out of the list');
        }
        /* tslint:disable-next-line: no-any*/
        const /** @type {?} */ node = {
            value,
            next: undefined,
            previous: undefined
        };
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
            this.current = node;
        }
        else {
            if (position === 0) {
                // first node
                node.next = this.head;
                this.head.previous = node;
                this.head = node;
            }
            else if (position === this.length) {
                // last node
                this.tail.next = node;
                node.previous = this.tail;
                this.tail = node;
            }
            else {
                // node in middle
                const /** @type {?} */ currentPreviousNode = this.getNode(position - 1);
                const /** @type {?} */ currentNextNode = currentPreviousNode.next;
                currentPreviousNode.next = node;
                currentNextNode.previous = node;
                node.previous = currentPreviousNode;
                node.next = currentNextNode;
            }
        }
        this.length++;
        this.createInternalArrayRepresentation();
    }
    /**
     * @param {?=} position
     * @return {?}
     */
    remove(position = 0) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        if (position === 0) {
            // first node
            this.head = this.head.next;
            if (this.head) {
                // there is no second node
                this.head.previous = undefined;
            }
            else {
                // there is no second node
                this.tail = undefined;
            }
        }
        else if (position === this.length - 1) {
            // last node
            this.tail = this.tail.previous;
            this.tail.next = undefined;
        }
        else {
            // middle node
            const /** @type {?} */ removedNode = this.getNode(position);
            removedNode.next.previous = removedNode.previous;
            removedNode.previous.next = removedNode.next;
        }
        this.length--;
        this.createInternalArrayRepresentation();
    }
    /**
     * @param {?} position
     * @param {?} value
     * @return {?}
     */
    set(position, value) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        const /** @type {?} */ node = this.getNode(position);
        node.value = value;
        this.createInternalArrayRepresentation();
    }
    /**
     * @return {?}
     */
    toArray() {
        return this.asArray;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    findAll(fn) {
        let /** @type {?} */ current = this.head;
        /* tslint:disable-next-line: no-any*/
        const /** @type {?} */ result = [];
        for (let /** @type {?} */ index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result.push({ index, value: current.value });
            }
            current = current.next;
        }
        return result;
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    push(...args) {
        /* tslint:disable-next-line: no-any*/
        args.forEach((arg) => {
            this.add(arg);
        });
        return this.length;
    }
    /**
     * @return {?}
     */
    pop() {
        if (this.length === 0) {
            return undefined;
        }
        const /** @type {?} */ last = this.tail;
        this.remove(this.length - 1);
        return last.value;
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    unshift(...args) {
        args.reverse();
        /* tslint:disable-next-line: no-any*/
        args.forEach((arg) => {
            this.add(arg, 0);
        });
        return this.length;
    }
    /**
     * @return {?}
     */
    shift() {
        if (this.length === 0) {
            return undefined;
        }
        const /** @type {?} */ lastItem = this.head.value;
        this.remove();
        return lastItem;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    forEach(fn) {
        let /** @type {?} */ current = this.head;
        for (let /** @type {?} */ index = 0; index < this.length; index++) {
            fn(current.value, index);
            current = current.next;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    indexOf(value) {
        let /** @type {?} */ current = this.head;
        let /** @type {?} */ position = 0;
        for (let /** @type {?} */ index = 0; index < this.length; index++) {
            if (current.value === value) {
                position = index;
                break;
            }
            current = current.next;
        }
        return position;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    some(fn) {
        let /** @type {?} */ current = this.head;
        let /** @type {?} */ result = false;
        while (current && !result) {
            if (fn(current.value)) {
                result = true;
                break;
            }
            current = current.next;
        }
        return result;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    every(fn) {
        let /** @type {?} */ current = this.head;
        let /** @type {?} */ result = true;
        while (current && result) {
            if (!fn(current.value)) {
                result = false;
            }
            current = current.next;
        }
        return result;
    }
    /**
     * @return {?}
     */
    toString() {
        return '[Linked List]';
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    find(fn) {
        let /** @type {?} */ current = this.head;
        let /** @type {?} */ result;
        for (let /** @type {?} */ index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result = current.value;
                break;
            }
            current = current.next;
        }
        return result;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    findIndex(fn) {
        let /** @type {?} */ current = this.head;
        let /** @type {?} */ result;
        for (let /** @type {?} */ index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result = index;
                break;
            }
            current = current.next;
        }
        return result;
    }
    /**
     * @param {?} position
     * @return {?}
     */
    getNode(position) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        let /** @type {?} */ current = this.head;
        for (let /** @type {?} */ index = 0; index < position; index++) {
            current = current.next;
        }
        return current;
    }
    /**
     * @return {?}
     */
    createInternalArrayRepresentation() {
        /* tslint:disable-next-line: no-any*/
        const /** @type {?} */ outArray = [];
        let /** @type {?} */ current = this.head;
        while (current) {
            outArray.push(current.value);
            current = current.next;
        }
        this.asArray = outArray;
    }
}
function LinkedList_tsickle_Closure_declarations() {
    /** @type {?} */
    LinkedList.prototype.length;
    /** @type {?} */
    LinkedList.prototype.head;
    /** @type {?} */
    LinkedList.prototype.tail;
    /** @type {?} */
    LinkedList.prototype.current;
    /** @type {?} */
    LinkedList.prototype.asArray;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlua2VkLWxpc3QuY2xhc3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3V0aWxzLyIsInNvdXJjZXMiOlsibGlua2VkLWxpc3QuY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE1BQU07O3NCQUNLLENBQUM7dUJBT2UsRUFBRTs7Ozs7O0lBRTNCLEdBQUcsQ0FBQyxRQUFnQjtRQUNsQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxRQUFRLEdBQUcsQ0FBQyxJQUFJLFFBQVEsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNqRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDZjtRQUVELHFCQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRXhCLEdBQUcsQ0FBQyxDQUFDLHFCQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLFFBQVEsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDO1lBQzlDLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO1NBQ3hCO1FBRUQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7S0FDdEI7Ozs7OztJQUVELEdBQUcsQ0FBQyxLQUFRLEVBQUUsV0FBbUIsSUFBSSxDQUFDLE1BQU07UUFDMUMsRUFBRSxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDM0MsTUFBTSxJQUFJLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1NBQ2hEOztRQUdELHVCQUFNLElBQUksR0FBUTtZQUNoQixLQUFLO1lBQ0wsSUFBSSxFQUFFLFNBQVM7WUFDZixRQUFRLEVBQUUsU0FBUztTQUNwQixDQUFDO1FBRUYsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElB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QyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNmLEtBQUssQ0FBQzthQUNQO1lBQ0QsT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7U0FDeEI7UUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2Y7Ozs7O0lBR1MsT0FBTyxDQUFDLFFBQWdCO1FBQ2hDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLFFBQVEsR0FBRyxDQUFDLElBQUksUUFBUSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLE1BQU0sSUFBSSxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQztTQUNoRDtRQUVELHFCQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRXhCLEdBQUcsQ0FBQyxDQUFDLHFCQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLFFBQVEsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDO1lBQzlDLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO1NBQ3hCO1FBRUQsTUFBTSxDQUFDLE9BQU8sQ0FBQztLQUNoQjs7OztJQUVTLGlDQUFpQzs7UUFFekMsdUJBQU0sUUFBUSxHQUFVLEVBQUUsQ0FBQztRQUMzQixxQkFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUV4QixPQUFPLE9BQU8sRUFBRSxDQUFDO1lBQ2YsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0IsT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7U0FDeEI7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztLQUN6QjtDQUdGIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIExpbmtlZExpc3Q8VD4ge1xuICBsZW5ndGggPSAwO1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gIHByb3RlY3RlZCBoZWFkOiBhbnk7XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgcHJvdGVjdGVkIHRhaWw6IGFueTtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICBwcm90ZWN0ZWQgY3VycmVudDogYW55O1xuICBwcm90ZWN0ZWQgYXNBcnJheTogVFtdID0gW107XG5cbiAgZ2V0KHBvc2l0aW9uOiBudW1iZXIpOiBUIHtcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDAgfHwgcG9zaXRpb24gPCAwIHx8IHBvc2l0aW9uID49IHRoaXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdm9pZCAwO1xuICAgIH1cblxuICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHBvc2l0aW9uOyBpbmRleCsrKSB7XG4gICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgIH1cblxuICAgIHJldHVybiBjdXJyZW50LnZhbHVlO1xuICB9XG5cbiAgYWRkKHZhbHVlOiBULCBwb3NpdGlvbjogbnVtYmVyID0gdGhpcy5sZW5ndGgpOiB2b2lkIHtcbiAgICBpZiAocG9zaXRpb24gPCAwIHx8IHBvc2l0aW9uID4gdGhpcy5sZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUG9zaXRpb24gaXMgb3V0IG9mIHRoZSBsaXN0Jyk7XG4gICAgfVxuXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICAgIGNvbnN0IG5vZGU6IGFueSA9IHtcbiAgICAgIHZhbHVlLFxuICAgICAgbmV4dDogdW5kZWZpbmVkLFxuICAgICAgcHJldmlvdXM6IHVuZGVmaW5lZFxuICAgIH07XG5cbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuaGVhZCA9IG5vZGU7XG4gICAgICB0aGlzLnRhaWwgPSBub2RlO1xuICAgICAgdGhpcy5jdXJyZW50ID0gbm9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHBvc2l0aW9uID09PSAwKSB7XG4gICAgICAgIC8vIGZpcnN0IG5vZGVcbiAgICAgICAgbm9kZS5uZXh0ID0gdGhpcy5oZWFkO1xuICAgICAgICB0aGlzLmhlYWQucHJldmlvdXMgPSBub2RlO1xuICAgICAgICB0aGlzLmhlYWQgPSBub2RlO1xuICAgICAgfSBlbHNlIGlmIChwb3NpdGlvbiA9PT0gdGhpcy5sZW5ndGgpIHtcbiAgICAgICAgLy8gbGFzdCBub2RlXG4gICAgICAgIHRoaXMudGFpbC5uZXh0ID0gbm9kZTtcbiAgICAgICAgbm9kZS5wcmV2aW91cyA9IHRoaXMudGFpbDtcbiAgICAgICAgdGhpcy50YWlsID0gbm9kZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG5vZGUgaW4gbWlkZGxlXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcmV2aW91c05vZGUgPSB0aGlzLmdldE5vZGUocG9zaXRpb24gLSAxKTtcbiAgICAgICAgY29uc3QgY3VycmVudE5leHROb2RlID0gY3VycmVudFByZXZpb3VzTm9kZS5uZXh0O1xuXG4gICAgICAgIGN1cnJlbnRQcmV2aW91c05vZGUubmV4dCA9IG5vZGU7XG4gICAgICAgIGN1cnJlbnROZXh0Tm9kZS5wcmV2aW91cyA9IG5vZGU7XG5cbiAgICAgICAgbm9kZS5wcmV2aW91cyA9IGN1cnJlbnRQcmV2aW91c05vZGU7XG4gICAgICAgIG5vZGUubmV4dCA9IGN1cnJlbnROZXh0Tm9kZTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5sZW5ndGgrKztcbiAgICB0aGlzLmNyZWF0ZUludGVybmFsQXJyYXlSZXByZXNlbnRhdGlvbigpO1xuICB9XG5cbiAgcmVtb3ZlKHBvc2l0aW9uID0gMCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCB8fCBwb3NpdGlvbiA8IDAgfHwgcG9zaXRpb24gPj0gdGhpcy5sZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUG9zaXRpb24gaXMgb3V0IG9mIHRoZSBsaXN0Jyk7XG4gICAgfVxuXG4gICAgaWYgKHBvc2l0aW9uID09PSAwKSB7XG4gICAgICAvLyBmaXJzdCBub2RlXG4gICAgICB0aGlzLmhlYWQgPSB0aGlzLmhlYWQubmV4dDtcblxuICAgICAgaWYgKHRoaXMuaGVhZCkge1xuICAgICAgICAvLyB0aGVyZSBpcyBubyBzZWNvbmQgbm9kZVxuICAgICAgICB0aGlzLmhlYWQucHJldmlvdXMgPSB1bmRlZmluZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyB0aGVyZSBpcyBubyBzZWNvbmQgbm9kZVxuICAgICAgICB0aGlzLnRhaWwgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChwb3NpdGlvbiA9PT0gdGhpcy5sZW5ndGggLSAxKSB7XG4gICAgICAvLyBsYXN0IG5vZGVcbiAgICAgIHRoaXMudGFpbCA9IHRoaXMudGFpbC5wcmV2aW91cztcbiAgICAgIHRoaXMudGFpbC5uZXh0ID0gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBtaWRkbGUgbm9kZVxuICAgICAgY29uc3QgcmVtb3ZlZE5vZGUgPSB0aGlzLmdldE5vZGUocG9zaXRpb24pO1xuICAgICAgcmVtb3ZlZE5vZGUubmV4dC5wcmV2aW91cyA9IHJlbW92ZWROb2RlLnByZXZpb3VzO1xuICAgICAgcmVtb3ZlZE5vZGUucHJldmlvdXMubmV4dCA9IHJlbW92ZWROb2RlLm5leHQ7XG4gICAgfVxuXG4gICAgdGhpcy5sZW5ndGgtLTtcbiAgICB0aGlzLmNyZWF0ZUludGVybmFsQXJyYXlSZXByZXNlbnRhdGlvbigpO1xuICB9XG5cbiAgc2V0KHBvc2l0aW9uOiBudW1iZXIsIHZhbHVlOiBUKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAwIHx8IHBvc2l0aW9uIDwgMCB8fCBwb3NpdGlvbiA+PSB0aGlzLmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQb3NpdGlvbiBpcyBvdXQgb2YgdGhlIGxpc3QnKTtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKHBvc2l0aW9uKTtcbiAgICBub2RlLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5jcmVhdGVJbnRlcm5hbEFycmF5UmVwcmVzZW50YXRpb24oKTtcbiAgfVxuXG4gIHRvQXJyYXkoKTogVFtdIHtcbiAgICByZXR1cm4gdGhpcy5hc0FycmF5O1xuICB9XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICBmaW5kQWxsKGZuOiBhbnkpOiBhbnlbXSB7XG4gICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICAgIGNvbnN0IHJlc3VsdDogYW55W10gPSBbXTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGlmIChmbihjdXJyZW50LnZhbHVlLCBpbmRleCkpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goe2luZGV4LCB2YWx1ZTogY3VycmVudC52YWx1ZX0pO1xuICAgICAgfVxuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLy8gQXJyYXkgbWV0aG9kcyBvdmVycmlkaW5nIHN0YXJ0XG4gIHB1c2goLi4uYXJnczogVFtdKTogbnVtYmVyIHtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gICAgYXJncy5mb3JFYWNoKChhcmc6IGFueSkgPT4ge1xuICAgICAgdGhpcy5hZGQoYXJnKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmxlbmd0aDtcbiAgfVxuXG4gIHBvcCgpOiBUIHtcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGNvbnN0IGxhc3QgPSB0aGlzLnRhaWw7XG4gICAgdGhpcy5yZW1vdmUodGhpcy5sZW5ndGggLSAxKTtcblxuICAgIHJldHVybiBsYXN0LnZhbHVlO1xuICB9XG5cbiAgdW5zaGlmdCguLi5hcmdzOiBUW10pOiBudW1iZXIge1xuICAgIGFyZ3MucmV2ZXJzZSgpO1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgICBhcmdzLmZvckVhY2goKGFyZzogYW55KSA9PiB7XG4gICAgICB0aGlzLmFkZChhcmcsIDApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMubGVuZ3RoO1xuICB9XG5cbiAgc2hpZnQoKTogVCB7XG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBjb25zdCBsYXN0SXRlbSA9IHRoaXMuaGVhZC52YWx1ZTtcbiAgICB0aGlzLnJlbW92ZSgpO1xuXG4gICAgcmV0dXJuIGxhc3RJdGVtO1xuICB9XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICBmb3JFYWNoKGZuOiBhbnkpOiB2b2lkIHtcbiAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGZuKGN1cnJlbnQudmFsdWUsIGluZGV4KTtcbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgfVxuICB9XG5cbiAgaW5kZXhPZih2YWx1ZTogVCk6IG51bWJlciB7XG4gICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgbGV0IHBvc2l0aW9uID0gMDtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgaWYgKGN1cnJlbnQudmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgIHBvc2l0aW9uID0gaW5kZXg7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICB9XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gIHNvbWUoZm46IGFueSk6IGJvb2xlYW4ge1xuICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuICAgIGxldCByZXN1bHQgPSBmYWxzZTtcbiAgICB3aGlsZSAoY3VycmVudCAmJiAhcmVzdWx0KSB7XG4gICAgICBpZiAoZm4oY3VycmVudC52YWx1ZSkpIHtcbiAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gIGV2ZXJ5KGZuOiBhbnkpOiBib29sZWFuIHtcbiAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcbiAgICBsZXQgcmVzdWx0ID0gdHJ1ZTtcbiAgICB3aGlsZSAoY3VycmVudCAmJiByZXN1bHQpIHtcbiAgICAgIGlmICghZm4oY3VycmVudC52YWx1ZSkpIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiAnW0xpbmtlZCBMaXN0XSc7XG4gIH1cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gIGZpbmQoZm46IGFueSk6IFQge1xuICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuICAgIGxldCByZXN1bHQ6IFQ7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBpZiAoZm4oY3VycmVudC52YWx1ZSwgaW5kZXgpKSB7XG4gICAgICAgIHJlc3VsdCA9IGN1cnJlbnQudmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xuICBmaW5kSW5kZXgoZm46IGFueSk6IG51bWJlciB7XG4gICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgbGV0IHJlc3VsdDogbnVtYmVyO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgaWYgKGZuKGN1cnJlbnQudmFsdWUsIGluZGV4KSkge1xuICAgICAgICByZXN1bHQgPSBpbmRleDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXG4gIHByb3RlY3RlZCBnZXROb2RlKHBvc2l0aW9uOiBudW1iZXIpOiBhbnkge1xuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCB8fCBwb3NpdGlvbiA8IDAgfHwgcG9zaXRpb24gPj0gdGhpcy5sZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUG9zaXRpb24gaXMgb3V0IG9mIHRoZSBsaXN0Jyk7XG4gICAgfVxuXG4gICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcG9zaXRpb247IGluZGV4KyspIHtcbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGN1cnJlbnQ7XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlSW50ZXJuYWxBcnJheVJlcHJlc2VudGF0aW9uKCk6IHZvaWQge1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cbiAgICBjb25zdCBvdXRBcnJheTogYW55W10gPSBbXTtcbiAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcblxuICAgIHdoaWxlIChjdXJyZW50KSB7XG4gICAgICBvdXRBcnJheS5wdXNoKGN1cnJlbnQudmFsdWUpO1xuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICB9XG4gICAgdGhpcy5hc0FycmF5ID0gb3V0QXJyYXk7XG4gIH1cblxuICAvLyBBcnJheSBtZXRob2RzIG92ZXJyaWRpbmcgRU5EXG59XG4iXX0=