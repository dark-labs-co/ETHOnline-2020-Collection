import bpy

randomRaw = 21815724101579525323423942336085941416496621156280683789015544938769814098632
randomList = [int(i) for i in str(randomRaw)]

for x in randomList:
    if x == 0:
        bpy.ops.mesh.primitive_cube_add(size=2, enter_editmode=False, align='WORLD', location=(x, 0, 0), scale=(1, 1, 1))
    elif x == 1:
        bpy.ops.mesh.primitive_uv_sphere_add(radius=1, enter_editmode=False, align='WORLD', location=(x, 0, 0), scale=(1, 1, 1))
    elif x == 2:
        bpy.ops.mesh.primitive_ico_sphere_add(radius=1, enter_editmode=False, align='WORLD', location=(x, 0, 0), scale=(1, 1, 1))
    elif x == 3:
        bpy.ops.mesh.primitive_cylinder_add(radius=1, depth=2, enter_editmode=False, align='WORLD', location=(x, 0, 0), scale=(1, 1, 1))
    elif x == 4:
        bpy.ops.mesh.primitive_cone_add(radius1=1, radius2=0, depth=2, enter_editmode=False, align='WORLD', location=(x, 0, 0), scale=(1, 1, 1))
    elif x == 5:
        bpy.ops.mesh.primitive_torus_add(align='WORLD', location=(x, 0, 0), rotation=(0, 0, 0), major_radius=1, minor_radius=0.25, abso_major_rad=1.25, abso_minor_rad=0.75)
    elif x == 6:
        bpy.ops.mesh.primitive_cube_add(size=2, enter_editmode=False, align='WORLD', location=(x, 0, 0), scale=(1, 1, 1))
    elif x == 7:
        bpy.ops.mesh.primitive_uv_sphere_add(radius=1, enter_editmode=False, align='WORLD', location=(x, 0, 0), scale=(1, 1, 1))
    elif x == 8:
        bpy.ops.mesh.primitive_ico_sphere_add(radius=1, enter_editmode=False, align='WORLD', location=(x, 0, 0), scale=(1, 1, 1))
    else:
        bpy.ops.mesh.primitive_ico_sphere_add(radius=1, enter_editmode=False, align='WORLD', location=(x, 0, 0), scale=(1, 1, 1))
