import { React, useState } from 'react'
import Navbar from "@/components/Navbar.jsx";
import MainBanner from '../components/services/MainBanner';
import FooterSection from "@/components/home/FooterSection"; 
import UspServices from '../components/services/UspServices';
import { Resource_HEADER, resorce_card_CONFIG, featured_content_Config, BLOG_CONFIG, Research_Config, Stories_config, FAQ_CONFIG } from "../config/resourceConfig"
import FeatureCard from "@/components/card/FeaturedCard.jsx";
import SectionHeading from "@/components/common/SectionHeading";
import Button from '../components/ui/Button';
import { ArrowUpRight } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { ChevronDown } from "lucide-react";


const ResourcesPage = () => {
    // const IconComponent = LucideIcons[icon];
    const { cards } = resorce_card_CONFIG;
    const data = featured_content_Config;
    const data1 = Research_Config;
    const data2 = Stories_config;
    const blogData = BLOG_CONFIG;

    const categories = [
        "All Posts",
        "Autonomous Testing",
        "Context Intelligence",
        "Agentic AI",
        "Engineering",
    ];
    const [activeCategory, setActiveCategory] = useState("All Posts");

    const filteredBlogs =
        activeCategory === "All Posts"
            ? BLOG_CONFIG
            : BLOG_CONFIG.filter(
                (item) => item.category === activeCategory
            );

    const [activeIndex, setActiveIndex] = useState(0);

    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };


    return (
        <>
            <Navbar
                wrapperClassName="fixed top-0 left-0"
                disableScrollHide={false}
                linkClassName="text-dark"
                iconClassName="text-dark"
            />
            <div className='md:mt-[100px] mt-[80px] rounded-[50px] py-[150px] pb-[60px] bg-[linear-gradient(180deg,#00273A_0%,#1E1E1E_55.42%)]'>
                <MainBanner data={Resource_HEADER} />
                <img src="/slider/atom.png" alt="" className='m-auto' />
            </div>
            <section className='py-[80px] pt-[40px]'>
                <div className="flex mt-5 flex-wrap px-5  gap-6 pt-10 justify-center max-w-[1200px] mx-auto">
                    {cards.map((card) => (
                        <FeatureCard key={card.id} {...card} />
                    ))}
                </div>

            </section>
            <section className='py-[80px]  pb-[200px] rounded-t-[50px] rounded-b-0 bg-[linear-gradient(180deg,#00273A_0%,#1E1E1E_55.42%)]'>
                <SectionHeading
                    title="Featured Content"
                    // subtitle='Purpose-built platforms that work independently or together to transform <br/> your testing and intelligence capabilities'
                    titleClassName="sm:text-[48px] text-[#fff]"
                    subtitleClassName=" sm:text-[16px] text-[#C6C6C6] max-w-[950px]"
                />
                <div className="grid grid-cols-12 md:gap-4 gap-6 lg:px-0 px-5 max-w-[1224px] mx-auto mt-[50px]">
                    {
                        data.map((item, id) => (
                            <div className="col-span-12 md:col-span-4 border border-[1px] border-[#505050] rounded-[16px] overflow-hidden">
                                <img src={item.img} alt="" />
                                <div className='py-5 pt-2 px-5 background: linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(153, 153, 153, 0.1) 100%);'>
                                    <h4 className='bg-[linear-gradient(90deg,rgba(255,166,141,0.12)_0.03%,rgba(253,58,132,0.12)_100%)]
                            w-fit p-2 rounded-[100px] px-[20px] my-3 border border[1px] border-[#797979] '><span className='font-secondary text-[12px]   bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)]
                            bg-clip-text
                            text-transparent'>{item.tags}</span></h4>
                                    <h2 className='font-primary text-[#fff] text-[24px] font-[600]'>{item.title}</h2>
                                    <p className='text-[#C6C6C6] text-[16px] font-secondary mt-[10px]'>{item.disc}</p>
                                    <ul className='flex justify-between mt-[20px]'>
                                        <li className='text-[#C6C6C6] text-[14px] font-secondary'>{item.location}</li>
                                        <li className='text-[#C6C6C6] text-[14px] font-secondary'>{item.time}</li>
                                    </ul>
                                    <Button
                                        btnText="Learn More"
                                        className=
                                        "text-[16px]  min-w-[100%] md:mt-[40px] mt-[20px] py-5 px-4 font-primary font-medium leading-[1.2] tracking-[0%] rounded-lg bg-primary-gradient text-white"
                                        href=""
                                        icon="CircleArrowOutUpRight"
                                        iconSize="20px"
                                    //   useCommonSvg="true"
                                    />
                                </div>
                            </div>
                        ))
                    }
                </div>


            </section>
            <section className="py-[100px] mt-[-60px] bg-white rounded-[60px] ">
                <div className='max-w-[1200px] mx-auto'>

                    {/* Heading */}
                    <SectionHeading
                        title="Latest from Our Blog"
                        // subtitle='Purpose-built platforms that work independently or together to transform <br/> your testing and intelligence capabilities'
                        titleClassName="sm:text-[48px] text-[#000]"
                        subtitleClassName=" sm:text-[16px] text-[#C6C6C6] max-w-[950px]"
                    />
                    <div className="text-center mb-[60px] ">

                        {/* Filters */}
                        <div className="flex flex-wrap justify-center gap-3 mt-6">
                            {categories.map((item) => (
                                <button
                                    key={item}
                                    onClick={() => setActiveCategory(item)}
                                    className={`px-4 py-1 rounded-full text-[13px] border transition
                                ${activeCategory === item
                                            ? "bg-[#C44558] text-white border-[#C44558]"
                                            : "border-[#E5E5E5] text-[#C44558] hover:bg-[#C44558]/10"
                                        }`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="grid px-5 md:px-0 grid-cols-1 md:grid-cols-2 gap-[20px]">
                        {filteredBlogs.map((item) => (
                            <div
                                key={item.id}
                                className="flex lg:flex-row flex-col md:w-[600px] w-[100%] bg-white rounded-[20px] border border-[#E5E5E5] overflow-hidden hover:shadow-lg transition"
                            >
                                {/* IMAGE */}
                                <div
                                    className="md:w-[45%] w-[100%] lg:h-[390px] h-[300px] bg-cover bg-center"
                                    style={{ backgroundImage: `url(${item.img})` }}
                                />

                                {/* CONTENT */}
                                <div className="md:w-[55%] w-[100%] p-6 flex flex-col justify-between">
                                    <div>
                                        <span className="inline-block mb-3 px-3 py-1 rounded-full text-[12px]
                                        bg-[linear-gradient(90deg,rgba(255,166,141,0.15)_0%,rgba(253,58,132,0.15)_100%)]
                                        text-[#C44558] font-medium">
                                            {item.tag}
                                        </span>

                                        <h3 className="text-[24px] font-primary font-semibold text-[#1E1E1E]">
                                            {item.title}
                                        </h3>

                                        <p className="text-[16px] text-[#626161] mt-2">
                                            {item.desc}
                                        </p>
                                        <ul className="flex items-center justify-between mt-4">
                                            <li className="text-[14px] text-[#8A8A8A]">
                                                {item.category}
                                            </li>
                                            <li className="text-[14px] text-[#8A8A8A]">
                                                {item.time}
                                            </li>

                                        </ul>
                                    </div>
                                    <Button
                                        btnText="Learn More"
                                        className=
                                        "text-[16px]  min-w-[100%] md:mt-[40px] mt-[20px] py-5 px-4 font-primary font-medium leading-[1.2] tracking-[0%] rounded-lg bg-primary-gradient text-white"
                                        href=""
                                        icon="CircleArrowOutUpRight"
                                        iconSize="20px"
                                    //   useCommonSvg="true"
                                    />


                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className='py-[100px] pt-[150px] mt-[-60px] bg-[linear-gradient(180deg,#00273A_0%,#1E1E1E_55.42%)] relative z-[-11]'>

                <SectionHeading
                    title="Enterprise Whitepapers & Research"
                    subtitle='In-depth research, frameworks, and architectural guidance for enterprise autonomous testing and AI quality engineering.'
                    titleClassName="sm:text-[48px] text-[#fff]"
                    subtitleClassName=" sm:text-[16px] text-[#C6C6C6] max-w-[950px]"
                />
                <div className="grid md:px-0 px-5 grid-cols-12 gap-4 max-w-[1224px] mx-auto mt-[50px]">
                    {
                        data1.map((item, id) => {
                            
                            return (
                                <div className="col-span-12 md:col-span-4 border border-[1px] border-[#505050] rounded-[16px] overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)]
">

                                    <div className='py-5 pt-2 px-5 background: linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(153, 153, 153, 0.1) 100%);'>
                                        <h4 className='bg-[linear-gradient(90deg,rgba(255,166,141,0.15)_0.03%,rgba(253,58,132,0.15)_100%)]

                            w-fit   px-[10px] my-3 h-[48px] w-[48px] flex justify-center  items-center '>
                                            <span className='font-secondary text-[12px]   text-[#FD3A84]'>    

                                                <img src="/svg/grid/file-text.svg" alt="" />
                                                
                                                
                                                </span></h4>
                                        <h2 className='font-primary text-[#fff] text-[24px] font-[600]  md:mt-[60px] mt-[28px]'>{item.title}</h2>
                                        <p className='text-[#C6C6C6] text-[16px] font-secondary mt-[10px]'>{item.disc}</p>
                                        <ul className='flex justify-start gap-[20px] mt-[20px]'>
                                            {
                                                item.tags.map((list, id) => (
                                                    <li className='bg-[linear-gradient(90deg,rgba(255,166,141,0.12)_0.03%,rgba(253,58,132,0.12)_100%)]
                                                            w-fit p-2 rounded-[100px] px-[20px] my-3 border border[1px] border-[#797979] '><span className='font-secondary text-[12px]   bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)]
                                                            bg-clip-text
                                                            text-transparent'>{list}</span></li>
                                                ))
                                            }

                                        </ul>
                                        <Button
                                            btnText="Download Whitepaper"
                                            className=
                                            "text-[16px]  min-w-[100%] md:mt-[40px] mt-[20px] py-5 px-4 font-primary font-medium leading-[1.2] tracking-[0%] rounded-lg bg-primary-gradient text-white"
                                            href=""
                                            icon="Download"
                                            iconSize="20px"
                                        //   useCommonSvg="true"
                                        />
                                    </div>
                                </div>

                            )
                        }

                        )
                    }
                </div>
            </section>
            <section className='py-[100px]'>
                <SectionHeading
                    title="Customer Success Stories"
                    subtitle='Real-world results achieved using autonomous and agentic testing systems.'
                    titleClassName="sm:text-[48px] text-[#000]"
                    subtitleClassName=" sm:text-[16px] text-[#626161] max-w-[950px]"
                />
                <div className="grid lg:px-0 px-5 grid-cols-12 md:gap-4 gap-6 max-w-[1224px] mx-auto mt-[50px]">
                    {
                        data2.map((item, id) => {
                            const Icon = LucideIcons[item.icon]; // ✅ dynamic icon
                            return (
                                <div className="col-span-12 md:col-span-4 rounded-[16px] overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)]
">

                                    <div className='py-5 pt-2 px-5 background: linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(153, 153, 153, 0.1) 100%);'>
                                        <h4 className='bg-[linear-gradient(90deg,rgba(255,166,141,0.12)_0.03%,rgba(253,58,132,0.12)_100%)]
                            w-fit p-2 rounded-[100px] px-[20px] my-3 border border[1px] border-[#797979] '><span className='font-secondary text-[12px] font-[600]  bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)]
                            bg-clip-text
                            text-transparent'>{item.tag}</span></h4>
                                        <h2 className='font-primary text-[#000] text-[24px] font-[600]  md:mt-[40px] mt-[30px]'>{item.title}</h2>
                                        <p className='text-[#626161] text-[16px] font-secondary mt-[10px]'>{item.disc}</p>
                                        <ul className=' gap-[20px] mt-[20px]'>
                                            {
                                                item.list.map((list, id) => (
                                                    <li className='mb-[10px] '><span className='font-secondary text-[16px]   bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)]
                                                            bg-clip-text
                                                            text-transparent'>+ {list}</span></li>
                                                ))
                                            }

                                        </ul>
                                        <Button
                                            btnText="View Case Study"
                                            className=
                                            "text-[16px]  min-w-[100%] md:mt-[40px] mt-[28px] py-5 px-4 font-primary font-medium leading-[1.2] tracking-[0%] rounded-lg bg-primary-gradient text-white"
                                            href=""
                                            icon="CircleArrowOutUpRight"
                                            iconSize="20px"
                                        //   useCommonSvg="true"
                                        />
                                    </div>
                                </div>

                            )
                        }

                        )
                    }
                </div>

            </section>
            <section className='py-[80px]  pb-[200px] md:rounded-t-[100px] rounded-t-[50px] rounded-b-0 bg-[linear-gradient(180deg,#00273A_0%,#1E1E1E_55.42%)]'>
                <SectionHeading
                    title="Autonomous Testing Benchmarks"
                    subtitle='Objective performance and accuracy benchmarks comparing autonomous testing <br/> against traditional approaches.'
                    titleClassName="sm:text-[48px] text-[#fff]"
                    subtitleClassName=" sm:text-[16px] text-[#C6C6C6] max-w-[950px]"
                />
                <div className="max-w-[1250px] m-auto mt-[60px] lg:px-0 px-5">
                    <div className="grid grid-cols-12 gap-4 ">
                        <div className=" col-span-12 md:col-span-4 p-5 border border-[1px] border-[#9c9c9c] rounded-[16px] overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)]">
                            <h2 className='text-[20px] font-primary font-[600] bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)]
                                                            bg-clip-text
                                                            text-transparent'>Test Coverage Accuracy</h2>
                            <div className=" mt-[40px]">
                                <p className='flex justify-between'> <span className='text-[#fff]'>Autonomous Testing</span> <span className='bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)]
                                                            bg-clip-text
                                                            text-transparent'>94%</span></p>
                                <div className="w-full h-3 bg-[#555555] rounded-full mt-1 overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-orange-400 to-pink-500 rounded-full"
                                        style={{ width: `94%` }}
                                    ></div>
                                </div>

                            </div>
                            <div className=" mt-[20px]">
                                <p className='flex justify-between'> <span className='text-[#fff]'>Scripted Testing</span> <span className='bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)]
                                                            bg-clip-text
                                                            text-transparent'>67%</span></p>
                                <div className="w-full h-3 bg-[#555555] rounded-full mt-1 overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-[#fff] to-[#fff] rounded-full"
                                        style={{ width: `67%` }}
                                    ></div>
                                </div>

                            </div>
                            <Button
                                btnText="View Report"
                                className=
                                "text-[16px]  min-w-[100%] mt-[40px] py-5 px-4 font-primary font-medium leading-[1.2] tracking-[0%] rounded-lg bg-primary-gradient text-white"
                                href=""
                                icon="CircleArrowOutUpRight"
                                iconSize="20px"
                            //   useCommonSvg="true"
                            />

                        </div>



                        <div className=" col-span-12 md:col-span-4 p-5 border border-[1px] border-[#9c9c9c] rounded-[16px] overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)]">
                            <h2 className='text-[20px] font-primary font-[600] bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)]
                                                            bg-clip-text
                                                            text-transparent'>Defect Detection Rate</h2>
                            <div className=" mt-[40px]">
                                <p className='flex justify-between'> <span className='text-[#fff]'>Autonomous Testing</span> <span className='bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)]
                                                            bg-clip-text
                                                            text-transparent'>94%</span></p>
                                <div className="w-full h-3 bg-[#555555] rounded-full mt-1 overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-orange-400 to-pink-500 rounded-full"
                                        style={{ width: `94%` }}
                                    ></div>
                                </div>

                            </div>
                            <div className=" mt-[20px]">
                                <p className='flex justify-between'> <span className='text-[#fff]'>Manual Testing</span> <span className='bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)]
                                                            bg-clip-text
                                                            text-transparent'>67%</span></p>
                                <div className="w-full h-3 bg-[#555555] rounded-full mt-1 overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-[#fff] to-[#fff] rounded-full"
                                        style={{ width: `67%` }}
                                    ></div>
                                </div>

                            </div>
                            <Button
                                btnText="View Report"
                                className=
                                "text-[16px]  min-w-[100%] mt-[40px] py-5 px-4 font-primary font-medium leading-[1.2] tracking-[0%] rounded-lg bg-primary-gradient text-white"
                                href=""
                                icon="CircleArrowOutUpRight"
                                iconSize="20px"
                            //   useCommonSvg="true"
                            />

                        </div>

                        <div className=" col-span-12 md:col-span-4 p-5 border border-[1px] border-[#9c9c9c] rounded-[16px] overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)]">
                            <h2 className='text-[20px] font-primary font-[600] bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)]
                                                            bg-clip-text
                                                            text-transparent'>Time to Market</h2>
                            <div className=" mt-[40px]">
                                <p className='flex justify-between'> <span className='text-[#fff]'>Autonomous Testing</span> <span className='bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)]
                                                            bg-clip-text
                                                            text-transparent'>94%</span></p>
                                <div className="w-full h-3 bg-[#555555] rounded-full mt-1 overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-orange-400 to-pink-500 rounded-full"
                                        style={{ width: `94%` }}
                                    ></div>
                                </div>

                            </div>
                            <div className=" mt-[20px]">
                                <p className='flex justify-between'> <span className='text-[#fff]'>Traditional Testing</span> <span className='bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)]
                                                            bg-clip-text
                                                            text-transparent'>67%</span></p>
                                <div className="w-full h-3 bg-[#555555] rounded-full mt-1 overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-[#fff] to-[#fff] rounded-full"
                                        style={{ width: `67%` }}
                                    ></div>
                                </div>

                            </div>
                            <Button
                                btnText="View Report"
                                className=
                                "text-[16px]  min-w-[100%] mt-[40px] py-5 px-4 font-primary font-medium leading-[1.2] tracking-[0%] rounded-lg bg-primary-gradient text-white"
                                href=""
                                icon="CircleArrowOutUpRight"
                                iconSize="20px"
                            //   useCommonSvg="true"
                            />

                        </div>
                    </div>

                </div>



            </section>

            <section className='py-[80px] mt-[-100px]  pb-[100px] md:rounded-t-[100px] rounded-t-[50px] rounded-b-0 bg-[#fff]'>
                <SectionHeading
                    title="Webinars & Events"
                    subtitle='Live and on-demand sessions with experts in autonomous testing and agentic AI.'
                    titleClassName="sm:text-[48px] text-[#000]"
                    subtitleClassName=" sm:text-[16px] text-[#626161] max-w-[950px]"
                />
                <div className="flex gap-4 justify-center  mt-8">
                    <span className='text-[12px] font-seconadry py-3 px-5 bg-[#C44558] rounded-[100px] text-[#fff] font-[500]'>Upcoming</span>
                    <span className='text-[12px] font-seconadry py-3 px-5 bg-[#fff]  border border-[1px] border-[#44558] rounded-[100px] text-[#C44558] font-[500]'>On-Demand</span>
                </div>
                <div className="max-w-[1224px] m-auto mt-[40px]">
                    <div className="grid grid-cols-12 gap-4 md:px-0 px-5">
                        <div className="md:col-span-6 col-span-12 p-5 border border-[1px] border-[#D9D9D9] rounded-[18px]">
                            <h4 className='bg-[linear-gradient(90deg,rgba(255,166,141,0.12)_0.03%,rgba(253,58,132,0.12)_100%)]
                            w-fit p-2 rounded-[100px] px-[20px]  '><span className='font-secondary text-[12px] font-[600]  bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)]
                            bg-clip-text
                            text-transparent'>Upcoming</span></h4>
                            <h2 className='font-primary text-[#1E1E1E] text-[24px] font-[600] mt-8'>Implementing Autonomous Testing at Scale</h2>
                            <p className='text-[#626161] text-[20px] font-secondary font-[500]'>Learn how to deploy autonomous testing across large enterprise environments.</p>
                            <ul className='md:mt-7 mt-3'>
                                <li className='text-[#626161] mb-[4px] font-[600]'>Speaker: <span className="text-[#FD3A84]"> Dr. Sarah Chen, VP Engineering</span></li>
                                <li className='text-[#626161] mb-[4px]  font-[600]'>Date: <span className="text-[#FD3A84]">Dec 15, 2024</span></li>
                                <li className='text-[#626161] mb-[4px] font-[600]'>Duration: <span className="text-[#FD3A84]"> 60 min</span></li>
                            </ul>
                            <Button
                                btnText="Register"
                                className=
                                "text-[16px]  min-w-[100%] md:mt-[40px] mt-[20px]  py-5 px-4 font-primary font-medium leading-[1.2] tracking-[0%] rounded-lg bg-primary-gradient text-white"
                                href=""
                                icon=""
                                iconSize="20px"
                            //   useCommonSvg="true"
                            />
                        </div>
                        <div className="md:col-span-6 col-span-12 p-5 border border-[1px] border-[#D9D9D9] rounded-[18px]">
                            <h4 className='bg-[linear-gradient(90deg,rgba(255,166,141,0.12)_0.03%,rgba(253,58,132,0.12)_100%)]
                            w-fit p-2 rounded-[100px] px-[20px]  '><span className='font-secondary text-[12px] font-[600]  bg-[linear-gradient(90deg,#FFA68D_0.03%,#FD3A84_100%)]
                            bg-clip-text
                            text-transparent'>Upcoming</span></h4>
                            <h2 className='font-primary text-[#1E1E1E] text-[24px] font-[600] mt-8'>AI Quality Engineering Best Practices</h2>
                            <p className='text-[#626161] text-[20px] font-secondary font-[500]'>Explore advanced techniques for implementing AI-driven quality assurance.</p>
                            <ul className='md:mt-7 mt-3'>
                                <li className='text-[#626161] mb-[4px] font-[600]'>Speaker: <span className="text-[#FD3A84]"> Dr. Sarah Chen, VP Engineering</span></li>
                                <li className='text-[#626161] mb-[4px]  font-[600]'>Date: <span className="text-[#FD3A84]">Dec 15, 2024</span></li>
                                <li className='text-[#626161] mb-[4px] font-[600]'>Duration: <span className="text-[#FD3A84]"> 60 min</span></li>
                            </ul>
                            <Button
                                btnText="Register"
                                className=
                                "text-[16px]  min-w-[100%] md:mt-[40px] mt-[20px] py-5 px-4 font-primary font-medium leading-[1.2] tracking-[0%] rounded-lg bg-primary-gradient text-white"
                                href=""
                                icon=""
                                iconSize="20px"
                            //   useCommonSvg="true"
                            />
                        </div>
                    </div>
                </div>

            </section>
            <section className='py-[80px] pt-0'>
                <SectionHeading
                    title="Frequently Asked Questions"
                    subtitle='Quick answers to common questions about the platform, technology, and deployment.'
                    titleClassName="sm:text-[48px] text-[#000]"
                    subtitleClassName=" sm:text-[16px] text-[#626161] max-w-[950px]"
                />
                <div className="max-w-[800px] m-auto mt-[60px] px-5 md:px-0" >
                    {FAQ_CONFIG.map((item, index) => (
                        <div
                            key={item.id}
                            className="border border-[#E6E6E6] rounded-[12px] mb-3 overflow-hidden bg-white"
                        >
                            {/* Header */}
                            <button
                                onClick={() => toggle(index)}
                                className="w-full flex justify-between items-center px-6 py-4 text-left"
                            >
                                <h3 className="font-primary text-[#C44558] font-[600] text-[20px]   ">
                                    {item.question}
                                </h3>

                                <ChevronDown
                                    size={24}
                                    className={`transition-transform duration-300 text-[#C44558] ${activeIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {/* Content */}
                            <div
                                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? "max-h-[500px] pb-5" : "max-h-0"
                                    }`}
                            >
                                <p className="text-[#626161] text-[18px] leading-[1.6]">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                                  <Button
                                        btnText="View All"
                                        className=
                                        "text-[20px]  min-w-[188px] m-auto font-[600] mt-[40px] py-5 px-4 font-primary  leading-[1.2] tracking-[0%] rounded-lg bg-primary-gradient text-white"
                                        href=""
                                        icon="CircleArrowOutUpRight"
                                        iconSize="20px"
                                    //   useCommonSvg="true"
                                    />

                </div>

            </section>
            <FooterSection/>
        </>
    )
}

export default ResourcesPage