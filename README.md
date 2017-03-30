# pagination-logic
Pagination logic module using vanilla javascript.

1. First set the last page value using by calling function `Pagination.initialPagination(lastPage)`
2. Now every time you change the current page, just pass it's value to function `Pagination.getUpdatedPageList(currentPage)`

# Expected outputs -
------------------------
Current page - 3

Last page - 6

Output = [1,2,3,4,'..',6]
------------------------
Current page - 8

Last page - 9

Output = [1,'..',7,8,9]
------------------------
Current page - 6

Last page - 12

Output = [1,'..',5,6,7,'...',12]
------------------------
