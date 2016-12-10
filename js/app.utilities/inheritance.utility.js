Netmap.initializers.impactUtility('InheritanceUtility', function(Netmap) {
	
	/*includes*/
	var NetmapException = Netmap.netmapClasses.coreClasses.NetmapException;

	var inherit = function(ParentClass, childClasses) {
			var childClassesArray = [];
			try {

				(!Array.isArray(childClasses)) ? (childClassesArray.push(childClasses)) : (childClassesArray = childClasses);

				for (var i = 0, maxi = childClassesArray.length; i < maxi; i++) {

					checkInheritanceClass(ParentClass, childClassesArray[i]);

					childClassesArray[i].prototype = Object.create(ParentClass.prototype);
					childClassesArray[i].prototype.constructor = childClassesArray[i];
				}
			} catch(e) {
				console.log(e);
			}
		},
		checkInheritanceClass = function(ParentClass, ChildClass) {
			if (typeof ChildClass === null) throw new NetmapException('ChildClass class must not be a null!');
			if (typeof ChildClass !== 'function') throw new NetmapException('ChildClass class must be a function!');
			if (ChildClass.prototype instanceof ParentClass) throw new NetmapException('ChildClass has already inherited from ParentClass');
		};

	return {
		inherit: inherit,
	};
});