const BinarySearchTree = require('./BinarySearchTree.js')

//Linear Search

function indexOf(array, value) {
  for (let i = 0; i < array.length; i++) {
      if (array[i] == value) {
          return i;
      }
  }
  return -1;
};

//Binary Search 
function binarySearch(array, value, start, end) {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;

  if (start > end) {
      return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];

  console.log(start, end);
  if (item == value) {
      return index;
  }
  else if (item < value) {
      return binarySearch(array, value, index + 1, end);
  }
  else if (item > value) {
      return binarySearch(array, value, start, index - 1);
  }
};

//Depth-first search
function dfs(values=[]) {
  if (this.left) {
      values = this.left.dfs(values);
  }
  values.push(this.value);

  if (this.right) {
      values = this.right.dfs(values);
  }
  return values;
};

//Breadth-first search 
function bfs(tree, values = []) {
  const queue = new Queue(); // Assuming a Queue is implemented (refer to previous lesson on Queue)
  const node = tree.root;
  queue.enqueue(node);
  while (queue.length) {
      const node = queue.dequeue(); //remove from the queue
      values.push(node.value); // add that value from the queue to an array

    if (node.left) {
        queue.enqueue(node.left); //add left child to the queue
    }

    if (node.right) {
        queue.enqueue(node.right); // add right child to the queue
    }
  }

  return values;
}

let sortedArr = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]

binarySearch(sortedArr, 8) //4
binarySearch(sortedArr, 16) //5

//iterative solution 
function find_bookI(library, dewey, title) {
    let start = 0
    let end = library.length;

    while (start <= end) {
        let middle = Math.floor((start + end) /2);
        if(library[middle].dewey == dewey) {
            //if you found the right dewey code, you need to start checking book titles, linearly here
            if(library[middle].title == title) {
                return library[middle]
            }
            for (let i = middle+1; library[i].dewey == dewey; i++) {
                if (library[i].title == title) {
                  return library[i];
                }
            }
            for (let i = middle-1; library[i].dewey == dewey; i--) {
                if (library[i].title == title) {
                    return library[i];
                }
                return null;
            }

        }
        if (library[middle].dewey < dewey) {
            start = middle + 1;
        }
        else {
            end = middle - 1;
        }
    }
    return null;

}

//recursive solution
function find_bookR(library, dewey, title, start, end) {
    start === undefined ? start = 0 : start = start;
    end === undefined ? end = library.length : end = end;

    if (start > end) {
        return -1
    }

    const middle = Math.floor((start + end) /2);
    const book = library[middle]

    if (book.dewey == dewey) {
        if (book.title == title) {
            return book;
        }
        else if (library[middle + 1].dewey == dewey) {
            return find_bookR(library, dewey, title, middle+1, end)
        }
        else if (library[middle - 1].dewey == dewey) {

            return find_bookR(library, dewey, title, middle - 1, end)
        }
        else {

            return null;
        }
    }
    else if (book.dewey < dewey) {

        return find_bookR(library, dewey, title, middle + 1, end)
    }
    else if (book.dewey > dewey){

        return find_bookR(library, dewey, title, start, middle - 1)
    }
    
    else return null;
}

let library = [
    {
    dewey: 12,
    title: 'donut'
    },
    {
    dewey: 14,
    title: 'cashew'
    },
    {
    dewey: 41, 
    title: 'elephant'
    }
]

// console.log('iterative', 
// find_bookI(library, 12, 'donut'))
// console.log('recursive', 
// find_bookR(library, 12, 'donut'))

// console.log('iterative', 
// find_bookI(library, 14, 'cashew'))
// console.log('recursive', 
// find_bookR(library, 14, 'cashew'))

// console.log('iterative', 
// find_bookI(library, 41, 'elephant'))
// console.log('recursive', 
// find_bookR(library, 41, 'elephant'))


export default searchFuncs  