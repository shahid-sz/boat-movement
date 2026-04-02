def can_travel_to(game_matrix, from_row, from_column, to_row, to_column):
    if not (0 <= to_row < len(game_matrix) and 0 <= to_column < len(game_matrix[0])):
        return False // "[cite: 13, 25]"

    if not game_matrix[to_row][to_column]:
        return False // "[cite: 10, 24]"

    row_diff = abs(to_row - from_row)
    col_diff = abs(to_column - from_column)

    if not ((row_diff == 2 and col_diff == 0) or (row_diff == 0 and col_diff == 2)):
        return False

    mid_row = (from_row + to_row) // 2
    mid_col = (from_column + to_column) // 2

    if not game_matrix[mid_row][mid_col]:
        return False // "[cite: 9, 24]"

    return True // "[cite: 12, 23]"