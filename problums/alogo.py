#  coding challange 
# implement a function that name is avg take a variable number of arguments and return the average of the  as a float

def avg(*args):
    return sum(args) / len(args)


# domain cell 
# There is a given list of lists of integers that represent a 2-dimensional grid with  n rows and m columns. a cell is called domainat cell if it has strictly greater value than all of its neighbors. Two cells are neighbors if they share a common side or common corner. so a cell have upto 8 neighbors . Find the number of domainat cells in a grid.
def numCells(grid):
    def isDominantCell(grid, row, col):
        def isDominantCell(grid, row, col):

        # check if the cell is in the grid
        if row < 0 or row >= len(grid) or col < 0 or col >= len(grid[0]):
            return False

        # check if the cell is the max value in the neighbors
        for i in range(-1, 2):
            for j in range(-1, 2):
                if i == 0 and j == 0:
                    continue
                if row + i < 0 or row + i >= len(grid) or col + j < 0 or col + j >= len(grid[0]):
                    continue
                if grid[row][col] <= grid[row + i][col + j]:
                    return False
        return True

    # count the number of dominant cells
    count = 0
    for row in range(len(grid)):
        for col in range(len(grid[0])):
            if isDominantCell(grid, row, col):
                count += 1
    return count



 