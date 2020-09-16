import React from "react"
import styles from './Tile.module.scss';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faInfo, faFolder } from '@fortawesome/free-solid-svg-icons';

const bgClass = cx("p-6 w-full bg-blue-900 h-48 flex justify-between flex-col", styles.tileBg);

const Tile = ({
category,
label,
icon,
title,
docs,
annotations,
edited,
created,
}) => (
  <div className="max-w-sm rounded overflow-hidden border-2 shadow-2xl">
    <div className="flex justify-end">
      <span className="border-l-2 w-10 h-10 flex items-center justify-center">
        <FontAwesomeIcon color="grey" icon={faInfo} />
      </span>
      <span className="border-l-2 w-10 h-10 flex items-center justify-center">
        <FontAwesomeIcon color="grey" icon={faEllipsisV} />
      </span>
    </div>
    <div className={bgClass}>
      <div className="z-10">
        <p className="font-bold text-2xl mb-2 text-gray-500 ">Codex</p>
        <p className="font-bold text-2xl text-white">{category}</p>
      </div>
      <div className="z-10 w-full flex justify-between">
        <span className="text-center px-4 py-2 bg-white rounded-full uppercase font-bold">{label}</span>
        <span><FontAwesomeIcon className="w-full h-full" size="2x" icon={icon} color="white" /></span>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-lg mb-2 font-normal">{title}</h3>
      <span className="text-xs uppercase mr-5">{docs} doc</span>
      <span className="text-xs uppercase">{annotations} annotations</span>
    </div>
    <div className="p-6 pb-6 border-t-2 text-sm">
      <span className="mr-5 break-words">Edited: {edited}</span>
      <span className="break-words">Created: {created}</span>
    </div>
  </div>
);

export default Tile;


