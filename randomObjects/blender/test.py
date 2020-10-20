randomRaw = 21815724101579525323423942336085941416496621156280683789015544938769814098632
randomRaw0 = 103319685879052806706757505111669152027123990384222649522573287478350888507615
randomRaw1 = 37171192940234695788324211385084926982721129696942701500091472902497836272153
randomRaw2 = 98157910133876376128446912324858829111595504214837180170922652803973134528300

randList = [int(i) for i in str(randomRaw)]
randList0 = [int(i) for i in str(randomRaw0)]
randList1 = [int(i) for i in str(randomRaw1)]
randList2 = [int(i) for i in str(randomRaw2)]

for obj, x, y, z in zip(randList,randList0,randList1, randList2):
    if obj == 0:
        print("0")
    elif obj == 1:
        print("1")
    elif obj == 2:
        print("2")
    elif obj == 3:
        print("3")
    elif obj == 4:
        print("4")
    elif obj == 5:
        print("5")
    elif obj == 6:
        print("6")
    elif obj == 7:
        print("7")
    elif obj == 8:
        print("8")
    else:
        print("9")