export type Result = {
  is_flagship_fund: boolean;  
  flagship_description_short: string;
  flagship_description_long: string; 
  flagship_image_url: string | null;
  is_betashares: boolean;
  issuer: string;
  fund_size: string;
  management_fee: string;
  classification: string;
  sub_classification: string | null;
  inception_date: string;
  dividend_frequency: string;
  investment_suitability: string;
  quick_ratio: string | null;
  current_ratio: string | null;
  price_to_book_ratio: string | null;
  market_capitalisation: string | null;
  sector: string | null;
  trailing_12m_dividend_yield: string | null;
  forward_12m_dividend_yield: string | null;
  management_approach: string;
  total_assets: string | null;
  total_revenue: string | null;
  pe_ratio_ttm: string | null;
  franking_credits: string | null;
  logo: string;
  symbol_openfigi: string;
  symbol: string;
  display_name: string;
  kind: string;
  asset_classes: string[];
  categories: string[];
  asset_categories: string[];
  asset_category_ids: string[];
  tags: string[];
  is_portfolio_excluded: boolean;
  is_auto_invest_included: boolean;
  currency: string;
  domicile: string;
  exchange: string;
  one_year_return: string | null;
  five_year_return: string | null;
};

export const results: Result[] = [
  {
    "is_flagship_fund": true,
    "flagship_description_short": "The world’s lowest cost Australian shares index ETF",
    "flagship_description_long": "A200 aims to track the performance of an index (before fees and expenses) comprising 200 of the largest companies by market capitalisation listed on the ASX.",
    "flagship_image_url": "https://powerful-oasis-c2085bc978.media.strapiapp.com/a200_light_6e9f73e6d8.png",
    "is_betashares": true,
    "issuer": "Betashares",
    "fund_size": "6759.206414",
    "management_fee": "0.04",
    "classification": "Australian Equities",
    "sub_classification": "Broad",
    "inception_date": "07-05-2018",
    "dividend_frequency": "Quarterly",
    "investment_suitability": "Capital growth and regular income",
    "quick_ratio": null,
    "current_ratio": null,
    "price_to_book_ratio": null,
    "market_capitalisation": null,
    "sector": null,
    "trailing_12m_dividend_yield": "3.3800000000000000",
    "forward_12m_dividend_yield": "3.389128",
    "management_approach": "Passive",
    "total_assets": null,
    "total_revenue": null,
    "pe_ratio_ttm": null,
    "franking_credits": null,
    "logo": "https://instruments.wealth.betashares.com.au/logos-etf/betashares.png",
    "symbol_openfigi": "A200:AU",
    "symbol": "A200",
    "display_name": "Betashares Australia 200 ETF",
    "kind": "etf",
    "asset_classes": [
      "Australian"
    ],
    "categories": [
      "Australian Equities"
    ],
    "asset_categories": [
      "Australian Equities"
    ],
    "asset_category_ids": [
      "d264c4d5-f5f0-4220-a1fa-263ed83813a9"
    ],
    "tags": [],
    "is_portfolio_excluded": false,
    "is_auto_invest_included": true,
    "currency": "AUD",
    "domicile": "Australia",
    "exchange": "ASX",
    "one_year_return": "5.809313",
    "five_year_return": "12.094664"
  },
  {
    "is_flagship_fund": true,
    "flagship_description_short": "Attractive returns from your cash, paid monthly",
    "flagship_description_long": "AAA is Australia’s largest cash ETF and is a simple way for investors to generate attractive monthly income from Australian cash. Assets are invested in deposit accounts held with selected banks in Australia.",
    "flagship_image_url": "https://powerful-oasis-c2085bc978.media.strapiapp.com/aaa_light_134bf55a9a.png",
    "is_betashares": true,
    "issuer": "Betashares",
    "fund_size": "4432.46678",
    "management_fee": "0.18",
    "classification": "Cash",
    "sub_classification": null,
    "inception_date": "06-03-2012",
    "dividend_frequency": "Monthly",
    "investment_suitability": "Regular income",
    "quick_ratio": null,
    "current_ratio": null,
    "price_to_book_ratio": null,
    "market_capitalisation": null,
    "sector": null,
    "trailing_12m_dividend_yield": "4.4400000000000000",
    "forward_12m_dividend_yield": "4.2327874",
    "management_approach": "Active",
    "total_assets": null,
    "total_revenue": null,
    "pe_ratio_ttm": null,
    "franking_credits": null,
    "logo": "https://instruments.wealth.betashares.com.au/logos-etf/betashares.png",
    "symbol_openfigi": "AAA:AU",
    "symbol": "AAA",
    "display_name": "Betashares Australian High Interest Cash ETF",
    "kind": "etf",
    "asset_classes": [
      "Cash"
    ],
    "categories": [
      "Cash"
    ],
    "asset_categories": [
      "Cash"
    ],
    "asset_category_ids": [
      "855ac7ac-41b5-4295-be72-86a11b871f30"
    ],
    "tags": [],
    "is_portfolio_excluded": false,
    "is_auto_invest_included": true,
    "currency": "AUD",
    "domicile": "Australia",
    "exchange": "ASX",
    "one_year_return": "4.545220",
    "five_year_return": "2.406181"
  },
  {
    "is_flagship_fund": false,
    "flagship_description_short": "long term capital growth",
    "flagship_description_long": "long term capital growth",
    "flagship_image_url": null,
    "is_betashares": true,
    "issuer": "Betashares",
    "fund_size": "42.920383",
    "management_fee": "0.34",
    "classification": "Australian Bonds",
    "sub_classification": null,
    "inception_date": "04-11-2024",
    "dividend_frequency": "Monthly",
    "investment_suitability": "Regular income",
    "quick_ratio": null,
    "current_ratio": null,
    "price_to_book_ratio": null,
    "market_capitalisation": null,
    "sector": null,
    "trailing_12m_dividend_yield": null,
    "forward_12m_dividend_yield": null,
    "management_approach": "Passive",
    "total_assets": null,
    "total_revenue": null,
    "pe_ratio_ttm": null,
    "franking_credits": null,
    "logo": "https://instruments.wealth.betashares.com.au/logos-etf/betashares.png",
    "symbol_openfigi": "AEBD:AU",
    "symbol": "AEBD",
    "display_name": "Betashares Ethical Australian Composite Bond ETF",
    "kind": "etf",
    "asset_classes": [],
    "categories": [],
    "asset_categories": [
      "Australian Bonds"
    ],
    "asset_category_ids": [
      "d2006e43-26c8-44be-b837-7d7468e7b8c5"
    ],
    "tags": [],
    "is_portfolio_excluded": false,
    "is_auto_invest_included": true,
    "currency": "AUD",
    "domicile": "Australia",
    "exchange": "ASX",
    "one_year_return": null,
    "five_year_return": null
  },
  {
    "is_flagship_fund": false,
    "flagship_description_short": "loremIpsum",
    "flagship_description_long": "loremIpsum",
    "flagship_image_url": null,
    "is_betashares": true,
    "issuer": "Betashares",
    "fund_size": "788.664724",
    "management_fee": "0.22",
    "classification": "Australian Bonds",
    "sub_classification": null,
    "inception_date": "05-07-2019",
    "dividend_frequency": "Monthly",
    "investment_suitability": "Regular income",
    "quick_ratio": null,
    "current_ratio": null,
    "price_to_book_ratio": null,
    "market_capitalisation": null,
    "sector": null,
    "trailing_12m_dividend_yield": "3.5100000000000000",
    "forward_12m_dividend_yield": "3.3860829",
    "management_approach": "Passive",
    "total_assets": null,
    "total_revenue": null,
    "pe_ratio_ttm": null,
    "franking_credits": null,
    "logo": "https://instruments.wealth.betashares.com.au/logos-etf/betashares.png",
    "symbol_openfigi": "AGVT:AU",
    "symbol": "AGVT",
    "display_name": "Betashares Australian Government Bond ETF",
    "kind": "etf",
    "asset_classes": [
      "Fixed Income"
    ],
    "categories": [
      "Australian Bonds"
    ],
    "asset_categories": [
      "Australian Bonds"
    ],
    "asset_category_ids": [
      "d2006e43-26c8-44be-b837-7d7468e7b8c5"
    ],
    "tags": [],
    "is_portfolio_excluded": false,
    "is_auto_invest_included": true,
    "currency": "AUD",
    "domicile": "Australia",
    "exchange": "ASX",
    "one_year_return": "5.870082",
    "five_year_return": "-1.585915"
  },
  {
    "is_flagship_fund": true,
    "flagship_description_short": "Invest in a portfolio of Australia’s highest quality companies",
    "flagship_description_long": "AQLT aims to track an index (before fees and expenses) that comprises 40 high quality Australian companies.",
    "flagship_image_url": "https://powerful-oasis-c2085bc978.media.strapiapp.com/AQLT_f763ed0c86.png",
    "is_betashares": true,
    "issuer": "Betashares",
    "fund_size": "404.653176",
    "management_fee": "0.35",
    "classification": "Australian Equities",
    "sub_classification": "Broad",
    "inception_date": "04-04-2022",
    "dividend_frequency": "Semiannually",
    "investment_suitability": "Capital growth and regular income",
    "quick_ratio": null,
    "current_ratio": null,
    "price_to_book_ratio": null,
    "market_capitalisation": null,
    "sector": null,
    "trailing_12m_dividend_yield": "4.3000000000000000",
    "forward_12m_dividend_yield": "4.0683939",
    "management_approach": "Passive",
    "total_assets": null,
    "total_revenue": null,
    "pe_ratio_ttm": null,
    "franking_credits": null,
    "logo": "https://instruments.wealth.betashares.com.au/logos-etf/betashares.png",
    "symbol_openfigi": "AQLT:AU",
    "symbol": "AQLT",
    "display_name": "Betashares Australian Quality ETF",
    "kind": "etf",
    "asset_classes": [
      "Australian"
    ],
    "categories": [
      "Australian Equities"
    ],
    "asset_categories": [
      "Australian Equities"
    ],
    "asset_category_ids": [
      "d264c4d5-f5f0-4220-a1fa-263ed83813a9"
    ],
    "tags": [],
    "is_portfolio_excluded": false,
    "is_auto_invest_included": true,
    "currency": "AUD",
    "domicile": "Australia",
    "exchange": "ASX",
    "one_year_return": "10.125559",
    "five_year_return": null
  }
];
