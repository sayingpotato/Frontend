import { NavbarComponent, NavbarOne, MainComponent } from './style'
import search from '@public/images/Search.svg'
import todayDiscount from '@public/images/todayDiscount.svg'
import map from '@public/images/Map.svg'
import orderedList from '@public/images/orderedList.svg'
import potato from '@public/images/potato.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar({ children }) {
  const lists = [
    { image: search, title: '검색', next: 'search' },
    { image: todayDiscount, title: '오늘의 할인', next: 'today' },
    { image: map, title: '할인 지도', next: 'map' },
    { image: orderedList, title: '주문 내역', next: 'order' },
    { image: potato, title: '마이 페이지', next: 'myPage' },
  ]
  return (
    <>
      <MainComponent>{children}</MainComponent>
      <NavbarComponent>
        {lists.map((item, index) => {
          const nextUrl = `/${item.next}`
          return (
            <Link key={index} href={nextUrl}>
              <NavbarOne>
                <Image src={item.image} alt={item.title} />
                <p>{item.title}</p>
              </NavbarOne>
            </Link>
          )
        })}
      </NavbarComponent>
    </>
  )
}
