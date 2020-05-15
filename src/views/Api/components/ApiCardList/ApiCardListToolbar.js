import { Grid, IconButton, Typography } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FilterListIcon from '@material-ui/icons/FilterList';
import { makeStyles } from '@material-ui/styles';
import { SearchInput } from 'components';
import React, { useState, useEffect } from 'react';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import { useDebounce } from 'common/utils';


const useStyles = makeStyles(theme => ({
  root:{
    width:"100%",
    marginBottom:theme.spacing(2)
  },
  toolbarPrimary: {
    display:"flex",
    alignItems:"center"
  },
  toolbarSecondary: {
    marginTop:theme.spacing(2),
    display:"flex",
    alignItems:"center",
    justifyContent:"right"
  },
  spacer: {
    flexGrow:1
  },
  searchInput: {
    width:370,
    [theme.breakpoints.down("sm")]:{
      width:"100%"
    }
  },
  filterSelection:{
    width:"100%"
  },
  rotateIcon:{
    transform:"rotate(90deg)"
  }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
        },
    },
};

const pricingData = [
  "무료",
  "부분유료",
  "유료"
];

const frequencyData = [
  "일중실시간",
  "일별",
  "히스토리"
];

const publisherData = [
  "코스콤",
  "BC카드",
  "위버플",
  "NICE",
  "기타"
]

const ApiCardListToolbar = (props) => {

  const {filter, setFilter, ...rest} = props;
  const [keywordVal, setKeywordVal] = useState(filter.keyword);

  const debounceKeyword = useDebounce(keywordVal, 100);

  useEffect(() => {
    if(debounceKeyword){
      handleFilterChange("keyword",debounceKeyword)
    }
  },[debounceKeyword])

  const classes = useStyles();

  const handleFilterChange = (name, value) => {
    setFilter({
      ...filter,
      [name]:value
    });
  };

  const handleSearchChange = (name, value) => {
    setKeywordVal(value);
  }

  const toggleAdvanceFilter = () => {
    setFilter({
      ...filter,
      showAdvance:!filter.showAdvance
    });
  }

  const toggleSortBy = () => {
    setFilter({
      ...filter,
      sortAsc:!filter.sortAsc
    })
  }

  return (
    <div className={classes.root}>
        <div className={classes.toolbarPrimary}>
          <SearchInput
            className={classes.searchInput}
            placeholder="Search API"
            onKeywordChange={(value) => handleSearchChange("keyword",value)}
            keyword={keywordVal}
          />
          <div className={classes.spacer}></div>
          <Typography variant="subtitle2">{filter.sortAsc?"이름순":"이름역순"}</Typography>
          <IconButton onClick={toggleSortBy}>
            <SyncAltIcon classes={{root:classes.rotateIcon}} />
          </IconButton>
          <IconButton onClick={toggleAdvanceFilter}>
            <FilterListIcon />
          </IconButton>
        </div>
        {filter.showAdvance && 
            <div className={classes.toolbarSecondary}>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={3} lg={2}>
                        <FormControl className={classes.filterSelection}>
                            <InputLabel>비용</InputLabel>
                            <Select
                                multiple
                                value={filter.pricing}
                                onChange={(event) => handleFilterChange("pricing", event.target.value)}
                                input={<Input />}
                                renderValue={(selected) => selected.length + "개 필터 적용중"}
                                MenuProps={MenuProps}
                            >
                            {pricingData.map((tag) => (
                                <MenuItem key={tag} value={tag}>
                                <Checkbox checked={filter.pricing.indexOf(tag) > -1} />
                                <ListItemText primary={tag} />
                                </MenuItem>
                            ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6} md={3} lg={2}>
                        <FormControl className={classes.filterSelection}>
                            <InputLabel>제공주기</InputLabel>
                            <Select
                                multiple
                                value={filter.frequency}
                                onChange={(event) => handleFilterChange("frequency", event.target.value)}
                                input={<Input />}
                                renderValue={(selected) => selected.length + "개 필터 적용중"}
                                MenuProps={MenuProps}
                            >
                            {frequencyData.map((tag) => (
                                <MenuItem key={tag} value={tag}>
                                <Checkbox checked={filter.frequency.indexOf(tag) > -1} />
                                <ListItemText primary={tag} />
                                </MenuItem>
                            ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6} md={3} lg={2}>
                        <FormControl className={classes.filterSelection}>
                            <InputLabel>제공기관</InputLabel>
                            <Select
                                multiple
                                value={filter.publisher}
                                onChange={(event) => handleFilterChange("publisher", event.target.value)}
                                input={<Input />}
                                renderValue={(selected) => selected.length + "개 필터 적용중"}
                                MenuProps={MenuProps}
                            >
                            {publisherData.map((tag) => (
                                <MenuItem key={tag} value={tag}>
                                <Checkbox checked={filter.publisher.indexOf(tag) > -1} />
                                <ListItemText primary={tag} />
                                </MenuItem>
                            ))}
                            </Select>
                        </FormControl>
                    </Grid>
              </Grid>
          </div>
        }
    </div>
  );
};

export default ApiCardListToolbar;
