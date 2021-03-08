const {initial} = require("./datas");
import deleteItem from "./deleteItem";

describe("delOrdersItem", () => {
    test("positive", () => {
      deleteItem(initial, 10000000, "čekajíci");
      expect(initial[0].items[0].id).toBe(10000001);
      deleteItem(initial, 10000011, "nevyzvednuto");
      expect(initial[1].items[1].id).toBe(10000012);
      deleteItem(initial, 10000001, "čekajíci");
      deleteItem(initial, 10000002, "čekajíci");
      deleteItem(initial, 10000003, "čekajíci");
      deleteItem(initial, 10000004, "čekajíci");
      expect(initial[3].type).toBe("čekajíci");
    });
    // test("negative", () => {
    //     expect(deleteItem({}, 1234, "čekajíci")).toThrow(TypeError);
    //     expect(deleteItem(initial, "sdasd", "čekajíci")).toThrow(TypeError);
    //     expect(deleteItem({}, 1234, 123456)).toThrow(TypeError);  
    // });
});