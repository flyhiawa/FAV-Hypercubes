def Faces(d):
    if d < 0:
        print("The number of dimensions can't go below 0!")
        return None
    calc = d * (d - 1) / 2 * 2 ** (d - 2)
    return calc

def Edges(d):
    if d < 0:
        print("The number of dimensions can't go below 0!")
        return None
    calc = d * 2 ** (d - 1)
    return calc

def Vertices(d):
    if d < 0:
        print("The number of dimensions can't go below 0!")
        return None
    calc = 2 ** d

    return calc
