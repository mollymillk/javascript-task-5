'use strict';


type Friends = {
	name: string,
	friends: string[],
	gender: 'male'|'female',
	best?: true
}
type Filter = {
	gender: 'male'|'female'
} 

function Iterator(friends, filter:Filter):void {
	
	this.counter = 0;
	this.value = {}
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
	}
	this.done = () => {
		if (this.counter >= friends.length) {
			return true;
		} else {
			return false;
		}
	}
}


/**
 * Итератор по друзям с ограничением по кругу
 * @extends Iterator
 * @constructor
 * @param {Object[]} friends
 * @param {Filter} filter
 * @param {Number} maxLevel – максимальный круг друзей
 */
function LimitedIterator(friends:Friends[], filter:()=>void, maxLevel:number):void {

}

/**
 * Фильтр друзей
 * @constructor
 */
function Filter():void {
	
}

/**
 * Фильтр друзей
 * @extends Filter
 * @constructor
 */
function MaleFilter():void {
	this.gender = 'male';
}

/**
 * Фильтр друзей-девушек
 * @extends Filter
 * @constructor
 */
function FemaleFilter():void {
	this.gender = 'female';
}

exports.Iterator = Iterator;
exports.LimitedIterator = LimitedIterator;

exports.Filter = Filter;
exports.MaleFilter = MaleFilter;
exports.FemaleFilter = FemaleFilter;
