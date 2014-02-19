// test cases are described in fixtures.js
describe("stringifyJSON", function(){
  it("should match the result of calling JSON.stringify", function(){

    arrayWithValidElements.forEach(function(obj){
      var result = stringifyJSON(obj);
      var expected = JSON.stringify(obj);
      expect(result).toEqual(expected);
    });

    //objectWithInvalidAttributes.forEach(function(obj){
    //  var result = stringifyJSON(obj);
    //  var expected = JSON.stringify(obj);
    //  expect(result).toEqual(expected);
    //});

  //Replacing forEach with _.each
    _.each(objectWithInvalidAttributes,function(obj){
       var result = stringifyJSON(obj);
       var expected = JSON.stringify(obj);
       expect(result).toEqual(expected);
     });
  });
});
