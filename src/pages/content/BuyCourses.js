import React from 'react';
import { View , Text , TouchableOpacity,Image, StyleSheet,Dimensions,FlatList } from 'react-native'
import persify from 'persify'

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HIGHT = Dimensions.get('window').height

class BuyCourses extends React.Component{
    static navigationOptions = {
        headerShown: false,
       
    };
        constructor(props){
            super(props);

            this.state={
              chatNumber: 3,
              courseSeason:[
                  {id: 0 , name : "فصل اول" },
                  {id: 1 , name : "فصل دوم" },
                  {id: 2 , name : "فصل سوم"},
                  {id: 3 , name : "فصل چهارم"},
                  {id: 4 , name : "فصل پنجم"},
                  
                  
              ],
              selectedItem: 0,
              selectedname:"فصل اول" ,
              coursePart :[
                {id: 0 ,view :250 ,courseid:0,title: 'عنوان فرضی', name : "بخش اول " ,coursetext:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.' },
                {id: 1 ,view :215 ,courseid:0,title: 'عنوان فرضی', name : "بخش دوم " ,coursetext:'    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.' },
                {id: 2 ,view :220 ,courseid:0,title: 'عنوان فرضی', name : "بخش سوم " ,coursetext:'    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.' },
                {id: 20 ,view :120 ,courseid:0,title: 'عنوان فرضی', name : "بخش چهارم" ,coursetext:'    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.' },
                {id: 3 ,view :120 ,courseid:0,title: 'عنوان فرضی', name : "بخش پنجم" ,coursetext:'    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.' },
                {id: 4 ,view :120 ,courseid:1,title: 'عنوان فرضی', name : "بخش اول" ,coursetext:'    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.' },
                {id: 5 ,view :120 ,courseid:1,title: 'عنوان فرضی', name : "بخش دوم" ,coursetext:'    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.' },
                {id: 6 ,view :120 ,courseid:1,title: 'عنوان فرضی', name : "بخش سوم" ,coursetext:'    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.' },
                {id: 7 ,view :120 ,courseid:1,title: 'عنوان فرضی', name : "بخش چهارم" ,coursetext:'    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.' },
                {id: 8 ,view :120 ,courseid:2,title: 'عنوان فرضی', name : "بخش اول" ,coursetext:'    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.' },
                {id: 9 ,view :120 ,courseid:2,title: 'عنوان فرضی', name : "بخش دوم" ,coursetext:'    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.' },
                {id: 10 ,view :120 ,courseid:2,title: 'عنوان فرضی', name : "بخش سوم" ,coursetext:'    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.' },
                {id: 11 ,view :120 ,courseid:2,title: 'عنوان فرضی', name : "بخش چهارم" ,coursetext:'    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.' },
                {id: 12 ,view :120 ,courseid:3,title: 'عنوان فرضی', name : "بخش اول" ,coursetext:'    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.' },
                {id: 13 ,view :120 ,courseid:3,title: 'عنوان فرضی', name : "بخش دوم" ,coursetext:'    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.' },
                {id: 14 ,view :120 ,courseid:3,title: 'عنوان فرضی', name : "بخش سوم" ,coursetext:'    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.' },
                {id: 15 ,view :120 ,courseid:3,title: 'عنوان فرضی', name : "بخش چهارم" ,coursetext:'    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.' },
                {id: 16 ,view :120 ,courseid:4,title: 'عنوان فرضی', name : "بخش اول" ,coursetext:'    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.' },
                {id: 17 ,view :120 ,courseid:4,title: 'عنوان فرضی', name : "بخش دوم" ,coursetext:'    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.' },
                {id: 18 ,view :120 ,courseid:4,title: 'عنوان فرضی', name : "بخش سوم" ,coursetext:'    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.' },
                {id: 19 ,view :120 ,courseid:4,title: 'عنوان فرضی', name : "بخش چهارم" ,coursetext:'    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.' },
        
            ]
            }
        }
        onPressHandler(item) {
            this.setState({selectedItem: item.id,
                            selectedname: item.name});
            console.log(this.state.selectedItem)
        }

    onPressheader= ()=>{
        this.props.navigation.goBack();
      }


    onPageSelected(evt){
        console.log(evt.nativeEvent.position)
    }
    render(){
        const {navigation} = this.props;
        var {chatNumber} = this.state;
        return(
            <View style={styles.container}>
                <View style={styles.shadow}>
                    {/* header */}
                    <View style={styles.header}>
                        <View style={{width:SCREEN_WIDTH ,flex :1 , alignItems:"center" ,flexDirection:'row'}}>
                           <View style={{flex:1 ,height:60, alignItems:'flex-start',justifyContent:'center'}}>
                                <TouchableOpacity  onPress={this.onPressheader}>
                                        <Image
                                            style={styles.back}
                                            source={require('../../../assets/img/app_icons/undo.png')}
                                            />
                                    </TouchableOpacity>
                           </View>
                           <View style={{flex:1 ,height:60, alignItems:'center',justifyContent:'center'}}>
                                <Image source={navigation.getParam('src')}  style={{width: 46, height: 46 , borderRadius:46/2 ,resizeMode:'cover' }} />
                           </View>
                           <View style={{flex:1 ,height:60, alignItems:'flex-end',justifyContent:'center'}}>
                                <TouchableOpacity style={{margin:15, width : 50 , height: 50 ,justifyContent:"center", alignContent:'center'}}
                                      onPress={()=> this.props.navigation.navigate('ChatList')} >
                                        <Image source={require('../../../assets/img/app_icons/chat.png')}  style={{width: 32, height: 32 ,  resizeMode: 'contain' , marginHorizontal:8}} />
                                        <View style={{ alignItems:"center",justifyContent:"center", width : 15 , height:15 , borderRadius:15/2 , backgroundColor : "#E3707F" ,position:"absolute",top:"55%",left:"60%"}}><Text style= {{fontSize:10, fontFamily:"IRANSansWeb", color:"#FFFFFF"}}>{ persify(chatNumber)}</Text></View>
                                </TouchableOpacity>

                           </View>
                        </View>
                        <View style={{flexDirection:'column', width:SCREEN_WIDTH,flex:1,alignItems:'center',justifyContent:'flex-start'}}>
                            <Text style={{alignItems:"center",color:'#ffff' , fontSize:16, textAlign: 'right',fontFamily:"IRANSansWeb"}}>{navigation.getParam('title')}</Text>
                            <Text style={{alignItems:"center",color:'#ffff' , fontSize:12, textAlign: 'right',fontFamily:"IRANSansWeb"}}>استاد دوره : {navigation.getParam('teacher')}</Text>
                        </View>
                    </View>
                    {/* content */}
                    <View style={styles.content}>
                        <View style={{width:SCREEN_WIDTH ,flex:.75}}>
                        <FlatList 
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    inverted={true}
                                    data={this.state.courseSeason}
                                    contentContainerStyle={{alignItems:'flex-start', justifyContent:'center'}}
                                    keyExtractor={(item,index)=> index.toString()}
                                    renderItem ={({item})=>(
                                        <TouchableOpacity
                                            style={{width: 80 ,height:50 , flexDirection:'column' ,alignItems:'center', justifyContent:'center'}}
                                            onPress={() => this.onPressHandler(item)}>
                                            <View style={{marginVertical:5, width:80 , height:2 , backgroundColor:this.state.selectedItem === item.id ? '#251A51' : '#70707099'}}/>
                                            <Text style={{height:25,fontFamily:'IRANSansWeb' ,fontSize:12, color:this.state.selectedItem === item.id ? '#251A51' : '#70707099'}}>{item.name}</Text>
                                            <View style={{marginVertical:5, width:80 , height:2 , backgroundColor:this.state.selectedItem === item.id ? '#251A51' : '#70707099'}}/>
                                          </TouchableOpacity>
                                                           
                                )}/>
                        </View>
                   
                                <View style={{width: SCREEN_WIDTH , flex:4, marginBottom:5 ,alignItems:'center',flexDirection:'row', justifyContent: 'center'}}>
                                <FlatList 
                                style={{marginTop:5,flexDirection:'row-reverse', marginBottom:5}}
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}
                                data={this.state.coursePart}
                                keyExtractor={(item,index)=> index.toString()}
                                renderItem ={({item})=>(
                                    <>
                                    
                                    {(item.courseid == this.state.selectedItem) ? (
                                        <TouchableOpacity style={styles.comment_card}
                                            onPress={() =>{ this.props.navigation.navigate('Part',{'courseid':item.id , 'section': item.name ,'title':item.title , 'name': this.state.selectedname,'coursetex':item.coursetext})}}
                                            >
                                       
                                       <View >
                                         <Image source={navigation.getParam('src')}  style={{margin: 2,marginTop:5, width: 45, height: 45 , borderRadius:45/2 }} />
                                       </View>
                                       <View style={{height:65,width:SCREEN_WIDTH-100,flexDirection:'column',}}>
                                       <Text style ={styles.user_text}>{ item.name} | {item.title} </Text>
                                       <Text numberOfLines={2} ellipsizeMode="middle"  style ={styles.comment_text}>{item.coursetext}</Text>
                                       <View style={{flexDirection:"row",marginTop:1,alignItems:'center',justifyContent:'flex-start'}}>
                                            {/* <View style={{margin:5,borderRadius:5/2, width:5,height:5 , backgroundColor:"#000000"}}/>
                                            <View style={{margin:5,borderRadius:5/2, width:5,height:5 , backgroundColor:"#000000"}}/>
                                            <View style={{margin:5,borderRadius:5/2, width:5,height:5 , backgroundColor:"#000000"}}/>
                                            <View style={{margin:5,borderRadius:5/2, width:5,height:5 , backgroundColor:"#000000"}}/>
                                            <View style={{margin:5,borderRadius:5/2, width:5,height:5 , backgroundColor:"#000000"}}/> */}
                                            <Text style={styles.viewS}>{persify(item.view)}</Text>
                                            <Image source={require('../../../assets/img/app_icons/view.png')}  style={{margin: 2,marginTop:5, width: 10, height: 10 }} />

                                            
                                      
                                       </View>
                                       </View>
                                    </TouchableOpacity>):(<></>)}
                                    
                                    </>
                                )}/>
                                </View>
                   


                    </View>
                </View>
                {/* share  */}
                <View style={styles.share}>
                    <View style={{flexDirection:'row', alignItems:'center',justifyContent:"center", width:Dimensions.get('window').width,marginTop:25,height:80}}>
                        <TouchableOpacity style={styles.btn_login2} onPress={this.onPressSave}>
                        
                            <Text style={styles.btn_title}> ادامه ویدئو </Text>
                            <Image source={require('../../../assets/img/app_icons/video-player.png')} style={{ width:20,height:20123,resizeMode: 'contain' }}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn_login} onPress={this.onPressSave}>

                            <Text style={styles.btn_title}> خلاصه مطالب گذشته </Text>
                            <Image source={require('../../../assets/img/app_icons/smz.png')} style={{ width:20,height:20,resizeMode: 'contain' }}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:'flex-start',
        flexDirection:"column"

    },
    shadow:{
        flex:3.25,
        width: SCREEN_WIDTH,
        flexDirection:'column',
        borderBottomLeftRadius: 25,
        backgroundColor: "#ffff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    share:{
        flex:.75,
        width:SCREEN_WIDTH,
        alignItems:"center",
        justifyContent:'flex-start',
        
        
    },
    header:{
        flex: 1.5,
        width:SCREEN_WIDTH,
        maxHeight:120,
        backgroundColor:'#EDC483',
        borderBottomLeftRadius: 25,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'flex-start'
    },
    content:{
        flex:3,
        width:SCREEN_WIDTH,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'

    },
    back:{
    
        width: 25,
        height: 25,
        marginHorizontal :20
      },
      comment_card:{
        padding:10,
        marginTop:10,
        marginBottom:5,
        marginHorizontal:10,
        width: SCREEN_WIDTH-20,
        height:90,borderRadius:5, 
        alignItems:'flex-start',
        flexDirection:'row-reverse', 
        justifyContent: 'flex-start',
        backgroundColor:"#FFFF",
         shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,   


  },
  user_text:{
      fontFamily:'IRANSansWeb' ,
      fontSize:10,
      color:'#6A437C'
  },
  comment_text:{
      fontFamily:'IRANSansWeb' ,
      fontSize:12,
      color:'#707070',
      padding:2,
      
  },
  btn_login: {
    flexDirection:'row',
    width : 165,
    height :45,
    margin:5,
    borderRadius:45,
    backgroundColor:'#8AA9FC',
    alignItems:'center',
    justifyContent:'center',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    },
    btn_login2: {
      flexDirection:'row',
      width : 165,
      height :45,
      margin:5,
      borderRadius:45,
      backgroundColor:'#EDC483',
      alignItems:'center',
      justifyContent:'center',
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      },
    btn_title: {
        padding : 5,
        textAlign: 'center',
        color: '#251A51',
        fontFamily:"IRANSansWeb",
        fontSize: 12
      },
      viewS:{
       
        textAlign: 'center',
        fontFamily:"IRANSansWeb",
        fontSize: 8

      }
})

export default BuyCourses;


