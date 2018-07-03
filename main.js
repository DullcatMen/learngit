//组合使用构造函数模式和原型模式
//构造函数模式用于定义实例属性，而原型模式用于定义方法和共享的属性
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = ["Shelby", "Court"];
}

Person.prototype = {
    constructor: Person,
    sayName: function() {
        console.log(this.name);
    }
};

//动态原型模式
//可以通过检查某个存在的方法是否有效，来决定是否需要初始化原型
function Person1(name, age, job) {
    //属性
    this.name = name;
    this.age = age;
    this.job = job;
    //方法
    if (typeof this.sayName !== "function") {
        Person1.prototype.sayName = function() {
            console.log(this.name);
        };
    }
}

//寄生构造函数模式
//创建一个函数，用来封装创建对象的代码，然后再返回这个对象
//除了使用new操作符以外，这个模式跟工厂模式其实一模一样
//通过在构造函数的末尾添加一个return语句，可以重写调用构造函数时的返回值
function SpecialArray() {
    //创建数组
    var values = new Array();
    //添加值，调用Array的push方法，并传入函数的参数类数组arguments
    values.push.apply(values, arguments);
    //添加方法
    values.toPipedString = function() {
        return this.join("|");
    }
    //返回数组
    return values;
}