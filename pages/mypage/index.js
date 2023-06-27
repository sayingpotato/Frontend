import Title from '@molecules/title';
import MypageContentInfoTemplate from '@components/templates/mypageContentInfoTemplate';

const mypage = () => {

  let data = [
    {
      id: 1,
      value: {
        name: '좋은 원두1',
        discountMoney : 15000
      },
    },
    {
      id: 2,
      value: {
        name: '좋은 원두2',
        discountMoney : 2000
      },
    },
    {
      id: 3,
      value: {
        name: '좋은 원두3',
        discountMoney : 3000
      },
    },
  ]

  return (
    <>
      <Title text="마이페이지" />
      <MypageContentInfoTemplate name="권낙현" totalMoney="15000" discountData={data}/>
    </>
  )
}

export default mypage
