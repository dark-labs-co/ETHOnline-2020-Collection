randomRaw = 21815724101579525323423942336085941416496621156280683789015544938769814098632
randomList = [int(i) for i in str(randomRaw)]
print randomList
for x in randomList:
    if x == 0:
        print "zero"
    elif x == 1:
        print "one"
    else:
        print "not zero"