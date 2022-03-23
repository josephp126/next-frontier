/** @jsx jsx */
import { jsx } from "theme-ui"
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Image,
  Button,
  Grid,
  Card,
  Select,
  NavLink,
  Checkbox,
  Label,
  Radio,
} from "theme-ui"
import React, { useState } from "react"
import { FaCircle, FaEllipsisH, FaAngleDown, FaSpinner } from 'react-icons/fa'
import { NewsData, FilterData } from './social.data'

export default function Notification() {
    return (
        <Container sx={styles.contain}>
            <Heading sx={styles.title}>Notifications</Heading>
            <Grid sx={styles.grid}>
                <Card sx={styles.newContent}>
                    <Flex sx={styles.newContent.header}>
                        <Flex sx={{ alignItems: 'center' }}>
                            <Box sx={styles.newContent.titleLeftWall}></Box>
                            <Text as="span" sx={styles.newContent.titleLeft}>New</Text>
                        </Flex>
                        <Flex sx={{ alignItems: 'center' }}>
                            <Box sx={styles.newContent.filter}>
                                <Button sx={styles.newContent.filter.filterBtn}>
                                    Recent
                                    <FaAngleDown sx={{ ml: 2 }}/>
                                </Button>
                                <div className="dropdown-content">
                                    <a>Recent</a>
                                    <a>AAAA</a>
                                    <a>BBBB</a>
                                    <a>CCCC</a>
                                </div>
                            </Box>
                            <FaEllipsisH sx={{ ml: 2, color: '#6F767E' }}/>
                        </Flex>
                    </Flex>

                    <Box sx={styles.news}>
                        {NewsData.map((item) => (
                            <Flex key={item.id} sx={styles.newsItem}>
                                <Flex >
                                    <Flex>
                                        <Image src={item.avatar} sx={styles.newsItem.avatar}/>
                                        <Box sx={styles.newsItem.tip}>{item.icon}</Box>
                                    </Flex>
                                    <Box sx={{ ml: 3 }}>
                                        <Text as="span" sx={styles.newsItem.textNormal}>Lurline </Text>@username <br/>
                                        Comment on <Text as="span"  sx={styles.newsItem.textNormal}>Smiles - 3D icons</Text>
                                        <Text as="p" sx={styles.newsItem.text}>"Great work, I just purchased this product"</Text>
                                        <Flex sx={styles.newsItem.status}>
                                            {item.status == 'like' ? 
                                                <NavLink className="liked">Liked</NavLink> : <NavLink>Like</NavLink>}
                                            <NavLink>Reply</NavLink>
                                        </Flex>
                                    </Box>
                                </Flex>
                                <Box sx={{ alignItems: 'center' }}>
                                    <Text as="span">1h</Text>
                                    <FaCircle sx={{ color: '#2A85FF', ml: 3, fontSize: '12px' }}/>
                                </Box>
                            </Flex>
                        ))}
                    </Box>

                    <Flex sx={styles.newsItem.loadMore}>                        
                        <Button sx={styles.newsItem.loadMore.btn}>
                            <FaSpinner sx={{ mr: 1 }}/> Load More</Button>
                    </Flex>
                </Card>

                <Card sx={styles.filter}>
                    <Flex sx={{ alignItems: 'center' }}>
                        <Box sx={styles.filter.titleLeftWall}></Box>
                        <Text as="span" sx={styles.filter.titleLeft}>Filter</Text>
                    </Flex>

                    <Box sx={styles.filter.content}>
                        {FilterData.map((item) => (
                            <Box key={item.id} sx={styles.filter.item}>
                                <Label sx={{ width: '100%', justifyContent: 'space-between' }}>
                                    <Text as="span" sx={styles.filter.text}>{item.name}</Text>
                                    <Checkbox className="filter-checkbox" />
                                </Label>
                            </Box>
                        ))}
                    </Box>

                    <Flex sx={styles.filter.select}>
                        <a className="filter-select">Select all</a>
                        <a className="filter-select">Unselect all</a>
                    </Flex>

                    <Box sx={styles.filter.content}>
                        <Box sx={styles.filter.item}>
                            <Label sx={{ width: '100%', justifyContent: 'space-between' }}>
                                <Text as="span" sx={styles.filter.text} className="user-type">Everyone</Text>
                                <Radio name='person' value='false' />
                            </Label>
                        </Box>
                        <Box sx={styles.filter.item}>
                            <Label sx={{ width: '100%', justifyContent: 'space-between' }}>
                                <Text as="span" sx={styles.filter.text} className="user-type">Customer</Text>
                                <Radio name='person' value='false' />
                            </Label>
                        </Box>
                    </Box>
                    
                </Card>
            </Grid>
        </Container>
    )
}

const styles = {
    contain: {
        mt: 4,
        ml: 3,
        p: '32px 34px !important',
        bg: 'white',
        border: '1.5px solid #F1F2F6',
        borderRadius: '10px',
    },
    title: {
        variant: 'heroPrimary',
        fontSize: '24px',
        color: '#203758',
    },
    grid: {
        mt: '1.1rem',
        mb: -1,
        pt: 0,
        gridGap: [ "0px 0px", ],
        gridTemplateColumns: [
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          null,
          null,
          "repeat(1, 65% 35%)",
        ],
    },
    newContent: {
        bg: '#FCFCFC',
        borderRadius: '8px',
        p: '24px',
        header: {
            width: '100%',
            justifyContent: 'space-between',
        },
        titleLeftWall: {
            width: '16px',
            height: '32px',
            bg: '#FFBC99',
            borderRadius: '4px'
        },
        titleLeft: {
            fontSize: '20px',
            lineHeight: '32px',
            fontFamily: 'mazzard-h-bold',
            ml: '16px'
        },
        filter: {
            position: 'relative',
            display: 'inline-block',
            '&:hover': {
                '.dropdown-content': { display: 'block', },
            },
            filterBtn: {
                bg: '#FCFCFC',
                fontSize: '14px',
                color: '#6F767E',
                p: '16px',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                borderRadius: '8px',
                border: '2px solid #EFEFEF',
                boxShadow: 'none',
                fontSize: '14px !important',
                padding: '10px 15px !important',
                '&:hover': { boxShadow: 'none', }
            },
            '.dropdown-content': {
                display: 'none',
                color: 'text',
                position: 'absolute',
                bg: '#F9F9F9',
                width:  '150px',
                border: '2px solid #EFEFEF',
                zIndex: 1,
                borderRadius: '12px',
                '> a': {
                    color: 'black',
                    padding: '12px 16px',
                    textDecoration: 'none',
                    display: 'block',
                    textAlign: 'center',
                    borderBottom: '1px solid #EFEFEF',
                    cursor: 'pointer',
                    '&:hover': {
                        bg: '#f1f1e7',
                    }
                }
            },
        },
        
    },
    newsItem: {
        color: '#9A9FA5',
        fontSize: '15px',
        fontWeight: '500',
        lineHeight: '24px',
        pl: 2,
        py: 6,
        justifyContent: 'space-between',
        borderBottom: '1px solid #EFEFEF',
        avatar: {
            width: '60px',
            height: '60px',
            objectFit: 'cover',
            borderRadius: '50%',
        },
        tip: {
            background: '#FF6A55',
            padding: '8px',
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            border: '2px solid white',
            color: 'white',
            position: 'absolute',
            mt: '33px',
            ml: '40px',
            '.news-status': {
                fontSize: '16px',
                bottom: '16%',
                position: 'absolute',
                left: '20%',
            }
        },
        textNormal: {
            color: '#1A1D1F',
            fontFamily: 'poppins-bold',
        },
        text: {
            color: '#1A1D1F',
            fontFamily: 'poppins',
            mt: 2,
        },
        status: {
            color: '#1A1D1F',
            fontFamily: 'poppins-bold',
            fontSize: '15px',
            letterSpacing: '-0.01em',
            lineHeight: '24px',
            mt: '15px',
            '> a': {
                pl: 0,
                cursor: 'pointer',
                '&:hover': { color: '#2A85FF', }
            },
            '.liked': { color: '#2A85FF', }
        },
        loadMore: {
            width: '100%',
            justifyContent: 'center',
            btn: {
                bg: '#FCFCFC',
                fontSize: '14px',
                color: '#1A1D1F',
                p: '16px',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                borderRadius: '8px',
                border: '2px solid #EFEFEF',
                boxShadow: 'none',
                fontSize: '14px !important',
                padding: '10px 15px !important',
                '&:hover': { boxShadow: 'none', }
            }
        }
    },
    filter: {
        bg: '#FCFCFC',
        borderRadius: '8px',
        p: '24px',
        titleLeftWall: {
            width: '16px',
            height: '32px',
            bg: '#CABDFF',
            borderRadius: '4px'
        },
        titleLeft: {
            fontSize: '20px',
            lineHeight: '32px',
            fontFamily: 'mazzard-h-bold',
            ml: '16px'
        },
        text: {
            fontSize: '15px',
            fontFamily: 'Inter',
            color: '#1A1D1F',
        },
        content: {
            py: 6,
        },
        item: {
            mb: '16px',
        },
        '.filter-checkbox': {
            width: '28px',
            height: '28px',
        },
        select: {
            justifyContent: 'center',
            pb: 5,
            borderBottom: '1px solid #EFEFEF',
            '.filter-select': {
                border: '2px solid #EFEFEF',
                borderRadius: '8px',
                padding: '8px 10%',
                fontSize: '13px',
                color: '#1A1D1F',
                letterSpacing: '-0.01em',
                ml: '12px',
                fontFamily: 'Inter',
                fontWeight: 'Bold',
                cursor: 'pointer',
                '&:hover': {
                    boxShadow: '0 12px 21px rgb(134 133 255 / 16%)',
                }
            }
        },
        '.user-type': {
            color: '#6F767E',
        }
    }
}