var Pagination = (function() {
    var self = {};
    var current = 1;
    var last = "";
    var a = [];
    var b = [];

    self.init = function() {
        a = [];
        b = [];
    };
	
	//call this function to initialize the pagination
    self.initialPagination = function(lastPage) {	//passes last page value to set in module first
        self.init();
        last = lastPage;
        for (var i = 1; i <= last; i++) {
            a.push(i);
        }
        b = (last <= 4) ? a : self.getUpdatedPageList(parseInt(current));
        return b;
    };

	//call this function to update the pagination bar
    self.getUpdatedPageList = function(current) {	//update the list depending upon the current page value
        if (last <= 4) {
            return b;
        }
        self.init();
        if (current == 1 || current == 2 || current == last - 1 || current == last) {
            if (current == 1 || current == 2) {
                b = [1, 2, 3, '...'];
                if (last > 4) {
                    b.push(last);
                } else {
                    b[3] = 4;
                }
            } else {
                b = ['...', last - 2, last - 1, last];
                if (last - 3 > 1) {
                    b.unshift(1);
                } else {
                    b[0] = 1;
                }
            }
        } else {
            b = ['...', current - 1, current, current + 1, '...'];
            if (last > current + 2) {
                b.push(last);
            } else {
                b[4] = last;
            }
            if (current - 2 > 1) {
                b.unshift(1);
            } else {
                b[0] = 1;
            }
        }
        return b;
    };
    return self;
})();