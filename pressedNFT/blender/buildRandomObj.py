import bpy

randomRaw = 2181572410157952532342394233608
randomRaw0 = 103319685879052806706757505111
randomRaw1 = 371711929402346957883242113850
randomRaw2 = 981579101338763761284469123248

randList = [int(i) for i in str(randomRaw)]
randList0 = [int(i) for i in str(randomRaw0)]
randList1 = [int(i) for i in str(randomRaw1)]
randList2 = [int(i) for i in str(randomRaw2)]

for obj, x, y, z in zip(randList,randList0,randList1, randList2):
    if obj == 0:
        bpy.ops.mesh.primitive_cube_add(size=2, enter_editmode=False, align='WORLD', location=(z, 1, 1),rotation=(x, y, z), scale=(1, 1, 1),)
    elif obj == 1:
        bpy.ops.mesh.primitive_uv_sphere_add(radius=1, enter_editmode=False, align='WORLD', location=(z, 1, 1),rotation=(x, y, z), scale=(1, 1, 1),)
    elif obj == 2:
        bpy.ops.mesh.primitive_ico_sphere_add(radius=1, enter_editmode=False, align='WORLD', location=(z, 1, 1),rotation=(x, y, z), scale=(1, 1, 1),)
    elif obj == 3:
        bpy.ops.mesh.primitive_cylinder_add(radius=1, depth=2, enter_editmode=False, align='WORLD', location=(z, 1, 1),rotation=(x, y, z), scale=(1, 1, 1),)
    elif obj == 4:
        bpy.ops.mesh.primitive_cone_add(radius1=1, radius2=0, depth=2, enter_editmode=False, align='WORLD', location=(z, 1, 1),rotation=(x, y, z), scale=(1, 1, 1),)
    elif obj == 5:
        bpy.ops.mesh.primitive_torus_add(align='WORLD', location=(z, 1, 1),rotation=(x, y, z), major_radius=1, minor_radius=0.25, abso_major_rad=1.25, abso_minor_rad=0.75)
    elif obj == 6:
        bpy.ops.mesh.primitive_cube_add(size=2, enter_editmode=False, align='WORLD', location=(z, 1, 1),rotation=(x, y, z), scale=(1, 1, 1),)
    elif obj == 7:
        bpy.ops.mesh.primitive_uv_sphere_add(radius=1, enter_editmode=False, align='WORLD', location=(z, 1, 1),rotation=(x, y, z), scale=(1, 1, 1),)
    elif obj == 8:
        bpy.ops.mesh.primitive_ico_sphere_add(radius=1, enter_editmode=False, align='WORLD', location=(z, 1, 1),rotation=(x, y, z), scale=(1, 1, 1),)
    else:
        bpy.ops.mesh.primitive_ico_sphere_add(radius=1, enter_editmode=False, align='WORLD', location=(z, 1, 1),rotation=(x, y, z), scale=(1, 1, 1),)