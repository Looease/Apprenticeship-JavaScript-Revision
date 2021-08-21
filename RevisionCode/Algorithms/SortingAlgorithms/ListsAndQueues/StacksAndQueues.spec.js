// tests 'add' and 'values' methods
function firstTest() {
    let list = new LinkedList

    console.assert(list.values() === [], "list should be [], but was: " + list.values())

    list.add("fred")
    console.assert(list.values() === ["fred"], "list should be [\"fred\"], but was: " + list.values())

    list.add("wilma")
    console.assert(list.values() === ["fred", "wilma"], "list should be [\"fred\", \"wilma\"], but was: " + list.values())

    list.add("barney")
    console.assert(list.values() === ["fred", "wilma", "barney"], "list should be [\"fred\", \"wilma\", \"barney\"], but was: " + list.values())
}

// tests 'find' method
function secondTest() {
    let list = new LinkedList

    console.assert(list.find("fred") === null, "fred found in empty list")

    list.add("fred")
    console.assert(list.find("fred").value() === "fred", "fred not found in list of length 1")
    console.assert(list.find("wilma") === null, "wilma found in list containing only fred")

    list.add("wilma")
    console.assert(list.find("fred").value() === "fred", "fred not found")
    console.assert(list.find("wilma").value() === "wilma", "wilma not found")
}

// tests 'delete' method
function thirdTest() {
    let list = new LinkedList

    list.add("fred")
    list.add("wilma")
    list.add("betty")
    list.add("barney")
    console.assert(list.values() === ["fred", "wilma", "betty", "barney"], "list should be [\"fred\", \"wilma\", \"betty\", \"barney\"], but was: " + list.values())

    list.delete(list.find("wilma"))
    console.assert(list.values() === ["fred", "betty", "barney"], "list should be [\"fred\", \"betty\", \"barney\"], but was: " + list.values())

    list.delete(list.find("barney"))
    console.assert(list.values() === ["fred","betty"], "list should be [\"fred\", \"betty\"], but was: " + list.values())

    list.delete(list.find("fred"))
    console.assert(list.values() === ["betty"], "list should be [\"betty\"], but was: " + list.values())

    list.delete(list.find("betty"))
    console.assert(list.values() === [], "list should be [], but was: " + list.values())

}