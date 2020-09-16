import React from "react"
import Tile from "../components/Tile/Tile"
import { tilesData } from "../data/tiles"

const HomePage = () => (
  <div className="py-20 px-16 w-screen">
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
    {tilesData.map(tile => <Tile {...tile} key={tile.title} />)}
    </div>
  </div>
)

export default HomePage
