import React from 'react'
import "./featuredInfo.css";
import { ArrowDownward,ArrowUpward } from '@material-ui/icons';

export default function FeaturedInfo() {
  return (
    <div className='featured_info'>
        <div className='featured_info_items'>
            <div className='featured_info_item'>
                <h4>Students</h4>
                <h2>2,360<span className='up'>+11 <ArrowUpward/></span></h2>
                <p>Compared to last month</p>
            </div>
            <div className='featured_info_item'>
                <h4>Earning</h4>
                <h2>$52,660<span className='up'>+33% <ArrowUpward/></span></h2>
                <p>Compared to last month</p>
            </div>
            <div className='featured_info_item'>
                <h4>Expenses</h4>
                <h2>$25,560<span className='down'>-21% <ArrowDownward/></span></h2>
                <p>Compared to last month</p>
            </div>
        </div>
    </div>
  )
}
