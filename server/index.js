const data = require('./data.json')

function flattenTree(tree) {
    const result = [];
    function flatten(node) {
      result.push(node);
      if (node.children && node.children.length > 0) {
        for (const child of node.children) {
          flatten(child);
        }
      }
    }
    for (const node of tree) {
      flatten(node);
    }
    return result;
  }

const result1=flattenTree(data);

const result=result1.map(v=>{delete v.children
    return v
}
)

console.log(result)
