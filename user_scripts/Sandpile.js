function NewBrick(XSize, YSize, ZSize, XPos, YPos, ZPos, Tras) {
    let brick = new Brick(new Vector3(XPos, YPos, ZPos), new Vector3(XSize, YSize, ZPos), "#f54242")
    brick.visibility = (Tras)

    Game.newBrick(brick) // "Parent" the brick to the game so players will download it.

}
console.log(NewBrick(1,1,1,1,1,1,1,));