def OneL_calcularF(dnum):
    result = ((dnum * (dnum - 1)) / 2) * (2 ** (dnum - 2))
    print(result)

def OneL_calcularA(dnum):
    result = dnum * (2 ** (dnum - 1))
    print(result)
    
def OneL_calcularV(dnum):
    result = 2 ** dnum
    print(result)
    
OneL_calcularF(8)
OneL_calcularA(8)
OneL_calcularV(8)