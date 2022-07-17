import React from 'react';

import s from './style.module.scss';

interface SearchBtnProps {
    onClose: () => void;
    switchIcon: boolean;
}

const SearchBtn: React.FC<SearchBtnProps> = ({ onClose, switchIcon }) => {
    return (
        <div className={s.searchBtn} onClick={onClose}>
            {!switchIcon ? (
                <svg
                    width='16'
                    height='16'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M1.25 10.5C1.25 5.39139 5.39139 1.25 10.5 1.25C15.6086 1.25 19.75 5.39139 19.75 10.5C19.75 15.6086 15.6086 19.75 10.5 19.75C5.39139 19.75 1.25 15.6086 1.25 10.5ZM10.5 2.75C6.21981 2.75 2.75 6.21981 2.75 10.5C2.75 14.7802 6.21981 18.25 10.5 18.25C14.7802 18.25 18.25 14.7802 18.25 10.5C18.25 6.21981 14.7802 2.75 10.5 2.75Z'
                        fill='#EAEAEA'
                    />
                    <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M7.14124 6.6412C8.00004 5.78247 9.18856 5.25 10.5 5.25C11.8114 5.25 13 5.78246 13.8587 6.64122C14.1516 6.93411 14.1516 7.40899 13.8587 7.70188C13.5658 7.99477 13.091 7.99477 12.7981 7.70188C12.2091 7.11294 11.3977 6.75 10.5 6.75C9.60235 6.75 8.79087 7.11293 8.20187 7.7019C7.90896 7.99478 7.43409 7.99476 7.14121 7.70186C6.84832 7.40896 6.84834 6.93408 7.14124 6.6412Z'
                        fill='#EAEAEA'
                    />
                    <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M16.0806 16.0805C16.3735 15.7876 16.8483 15.7876 17.1412 16.0805L21.3839 20.3232C21.6768 20.6161 21.6768 21.0909 21.3839 21.3838C21.091 21.6767 20.6161 21.6767 20.3232 21.3838L16.0806 17.1412C15.7877 16.8483 15.7877 16.3734 16.0806 16.0805Z'
                        fill='#EAEAEA'
                    />
                </svg>
            ) : (
                <svg
                    width='16'
                    height='16'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M1 12C1 5.92489 5.92489 1 12 1C18.0751 1 23 5.92489 23 12C23 18.0751 18.0751 23 12 23C5.92489 23 1 18.0751 1 12ZM12 2.78378C6.91005 2.78378 2.78378 6.91005 2.78378 12C2.78378 17.09 6.91005 21.2162 12 21.2162C17.09 21.2162 21.2162 17.09 21.2162 12C21.2162 6.91005 17.09 2.78378 12 2.78378Z'
                        fill='#EAEAEA'
                    />
                    <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M6.93915 17.0001C6.64625 16.7072 6.64625 16.2323 6.93915 15.9394L15.6588 7.21972C15.9517 6.92683 16.4266 6.92683 16.7195 7.21972C17.0124 7.51262 17.0124 7.98749 16.7195 8.28038L7.99981 17.0001C7.70691 17.2929 7.23204 17.2929 6.93915 17.0001Z'
                        fill='#EAEAEA'
                    />
                    <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M6.93934 7.21948C7.23223 6.92659 7.70711 6.92659 8 7.21948L16.7197 15.9392C17.0126 16.232 17.0126 16.7069 16.7197 16.9998C16.4268 17.2927 15.9519 17.2927 15.659 16.9998L6.93934 8.28014C6.64645 7.98725 6.64645 7.51238 6.93934 7.21948Z'
                        fill='#EAEAEA'
                    />
                </svg>
            )}
        </div>
    );
};

export default SearchBtn;
