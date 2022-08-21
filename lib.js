'use strict';
function Iterator(friends, filter) {
    this.counter = 0;
    this.value = {};
    this.next = this[Symbol.iterator] = () => {
        if (this.counter < friends.length) {
            if (friends[this.counter].gender == 'female') {
                this.value = friends[this.counter]['name'];
                this.counter++;
                return this.value;
            }
            this.counter++;
            return this.next();
        }
        return null;
    };
    this.done = () => {
        if (this.counter >= friends.length) {
            return true;
        }
        else {
            return false;
        }
    };
}
/**
 * Итератор по друзям с ограничением по кругу
 * @extends Iterator
 * @constructor
 * @param {Object[]} friends
 * @param {Filter} filter
 * @param {Number} maxLevel – максимальный круг друзей
 */
function LimitedIterator(friends, filter, maxLevel) {
}
/**
 * Фильтр друзей
 * @constructor
 */
function Filter() {
}
/**
 * Фильтр друзей
 * @extends Filter
 * @constructor
 */
function MaleFilter() {
    this.gender = 'male';
}
/**
 * Фильтр друзей-девушек
 * @extends Filter
 * @constructor
 */
function FemaleFilter() {
    this.gender = 'female';
}
exports.Iterator = Iterator;
exports.LimitedIterator = LimitedIterator;
exports.Filter = Filter;
exports.MaleFilter = MaleFilter;
exports.FemaleFilter = FemaleFilter;
