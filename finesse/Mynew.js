function myNew(constructor) {
  return constructor() instanceof Object.prototype ? constructor() : {};
}
