import React from 'react'
import { NoteAppBar } from './NoteAppBar'

export const NoteScreen = () => {
    return (
        <div className = "notes__main-content">
            <NoteAppBar />
            <div className = "notes__content">
                <input 
                    type = "text"
                    placeholder = "Some awesome title"
                    className = "notes__title-input"
                />
                <textarea
                    placeholder = "What happened today"
                    className = "notes__textarea"
                ></textarea>
                {/* Contenedor de la imagen que se sube */}
                <div className = "notes__image"> 
                    <img 
                        src = "https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/styles/bi_570/public/media/image/2021/08/lactea-perseidas-2444713.jpg?itok=Vv39j5VT"
                        alt = "imagen"
                    />
                </div>
            </div>
        </div>
    )
}
